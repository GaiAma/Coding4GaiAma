import {
  CreateNodeArgs,
  PluginOptions,
  CreateSchemaCustomizationArgs,
} from 'gatsby'
import { upperFirst } from 'lodash'
import * as leasot from 'leasot'
import { CustomParsers, ExtensionsDb } from 'leasot/dist/definitions'
import Autolinker from 'autolinker'
import he from 'he'
import * as babel from '@babel/core'
import mdx from '@mdx-js/mdx'
import { remarkTruncateLinks } from 'remark-truncate-links'

const autolinker = new Autolinker({
  truncate: { length: 32, location: 'smart' },
})

type NodeArgs = CreateNodeArgs & {
  node: {
    id: string
    ext: string
    base: string
    relativePath: string
  }
}

enum ContentMode {
  Mdx = 'mdx',
  Html = 'html',
  Text = 'text',
}

type PluginOpts = PluginOptions & {
  sourceInstanceName: string
  internalType: string
  mode: ContentMode
  truncateLinks?: number | { length: number; style: string }
  customTags: string[]
  customParsers: CustomParsers
  associateParser: ExtensionsDb
}

type Node = {
  file___NODE?: string
  file?: string
  tag: string
  line: number
  ref: string
  text: string
}

type ContentModes = {
  [key: string]: (text: string) => Promise<string>
}

const defaultSourceInstanceName = 'leasot'
const defaultInternalType = 'File'

export const onCreateNode = async (
  {
    node,
    loadNodeContent,
    createNodeId,
    getNode,
    createContentDigest,
    reporter,
    actions: { createNode, createParentChildLink },
  }: NodeArgs,
  {
    sourceInstanceName = defaultSourceInstanceName,
    internalType = defaultInternalType,
    mode = ContentMode.Text,
    truncateLinks = { length: 32, style: 'smart' },
    customTags = [],
    customParsers = {},
    associateParser = {},
  }: PluginOpts
): Promise<void> => {
  // we only care about File nodes with our sourceInstanceName
  if (
    node.sourceInstanceName !== sourceInstanceName ||
    !(
      node.internal.type === internalType &&
      leasot.isExtensionSupported(node.ext)
    )
  ) {
    return
  }

  // const nodeType = `${upperFirst(sourceInstanceName)}Unfiltered`
  const nodeType: string = `${upperFirst(sourceInstanceName)}`

  /**
   * helper to create the node object, create the node and link to parent
   */
  const makeNode = async ({ file, ...todo }: Node) => {
    const id = createNodeId(`${node.id} >>> ${file}#${todo.line} >>> Leasot`)
    if (getNode(id)) return

    const contentModes: ContentModes = {
      [ContentMode.Text]: async (text: string): Promise<string> => text,
      [ContentMode.Html]: async (text: string): Promise<string> =>
        autolinker.link(text),
      [ContentMode.Mdx]: async (text: string): Promise<string> => {
        const remarkPlugins = []
        if (truncateLinks !== 0) {
          remarkPlugins.push([remarkTruncateLinks, truncateLinks])
        }
        const code = await mdx(text, { remarkPlugins })
        const result = babel.transform(code, {
          configFile: false,
          presets: [
            require('@babel/preset-react'),
            [
              require('@babel/preset-env'),
              {
                useBuiltIns: 'entry',
                corejs: 2,
                modules: 'false',
              },
            ],
          ],
        })
        return !result?.code
          ? ''
          : result.code
              .replace(
                /export\s*default\s*function\s*MDXContent\s*/,
                'return function MDXContent'
              )
              .replace(
                /export\s*{\s*MDXContent\s+as\s+default\s*};?/,
                'return MDXContent;'
              )
      },
    }

    const escapedText = he.encode(todo.text)

    const leasotNode = {
      todo: {
        ...todo,
        file___NODE: node.id,
        value: await contentModes[mode](escapedText),
        modifiedTime: node.modifiedTime,
      },
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(todo),
        type: nodeType,
      },
    }

    createNode(leasotNode)
    // @ts-ignore TODO: await https://github.com/gatsbyjs/gatsby/issues/19993
    createParentChildLink({ parent: node, child: leasotNode })
  }

  try {
    const content = await loadNodeContent(node)

    /**
     * parse node content for todo, fixme & customTags
     */
    const todos = leasot.parse(content, {
      extension: node.ext,
      filename: node.base,
      withInlineFiles: true,
      customTags,
      customParsers,
      associateParser: {
        '.md': { parserName: 'twigParser', includedFiles: ['.yml'] },
        '.mdx': { parserName: 'twigParser', includedFiles: ['.yml'] },
        ...associateParser,
      },
    })

    /**
     * iterate todos to store each in its own node
     * easier to query
     */
    todos.map(makeNode)
  } catch (err) {
    reporter.panicOnBuild(
      `Error in ${sourceInstanceName} processing ${
        node.relativePath ? `file ${node.relativePath}` : `in node ${node.id}`
      }:\n
      ${err.message}`
    )
  }
}

export const createSchemaCustomization = (
  { actions }: CreateSchemaCustomizationArgs,
  { sourceInstanceName = defaultSourceInstanceName }: PluginOpts
) => {
  const { createTypes } = actions
  const capitalizedInstanceName =
    sourceInstanceName[0].toUpperCase() + sourceInstanceName.slice(1)
  const typeDefs = `
    type ${capitalizedInstanceName} implements Node @derivedTypes @dontInfer {
      todo: ${capitalizedInstanceName}Todo
    }

    type ${capitalizedInstanceName}Todo {
      tag: String
      line: Int
      ref: String
      text: String
      file: File @link(by: "id", from: "file___NODE")
      value: String
      modifiedTime: Date @dateformat
    }
  `
  createTypes(typeDefs)
}
