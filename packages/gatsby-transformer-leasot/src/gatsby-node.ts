import { CreateNodeArgs, PluginOptions } from 'gatsby'
import { upperFirst } from 'lodash'
import * as leasot from 'leasot'
import { CustomParsers, ExtensionsDb } from 'leasot/dist/definitions'
import Autolinker from 'autolinker'

import * as babel from '@babel/core'
import mdx from '@mdx-js/mdx'
import { remarkTruncateLinks } from 'remark-truncate-links'

const autolinker = new Autolinker({
  truncate: { length: 32, location: 'smart' },
})

/**
 * custom resolver used to filter out emptyState, which we can't delete for now
 */
// exports.createResolvers = ({ createResolvers }, { sourceInstanceName }) => {
//   const nodeType = upperFirst(sourceInstanceName)
//   const typeUnfiltered = `${nodeType}Unfiltered`
//   const resolvers = {
//     Query: {
//       [`all${nodeType}`]: {
//         type: [typeUnfiltered],
//         args: {
//           type: GraphQLString,
//           group: GraphQLString,
//         },
//         resolve: (_, { group, type }, { nodeModel }) => {
//           const todos = nodeModel.getAllNodes({ type: typeUnfiltered })
//           // get all todos, filtered by optional type, drop isEmptyState
//           // const matchesGroup = n => new RegExp(group, `i`).test(n.todo.tag)
//           const groupPath = path([`todo`, group])
//           const reducer = a =>
//             keys(a).reduce((acc, fieldValue) => [
//               ...acc,
//               { fieldValue, items: a[fieldValue] },
//             ])
//           const groupByTag = groupBy(groupPath)

//           const isEmptyState = t => t.todo.isEmptyState
//           const matchesTag = t => new RegExp(type, `i`).test(t.todo.tag)
//           const filter = t => (!isEmptyState(t) && type ? matchesTag(t) : true)

//           const filtered = todos.filter(filter)
//           return group ? reducer(groupByTag(filtered)) : filtered
//         },
//       },
//     },
//   }
//   createResolvers(resolvers)
// }

type NodeArgs = CreateNodeArgs & {
  node: {
    id: string
    ext: string
    base: string
    relativePath: string
  }
}

type PluginOpts = PluginOptions & {
  sourceInstanceName: string
  mode: string
  truncateLinks?: number | { length: number; style: string }
  customTags: string[]
  customParsers: CustomParsers
  associateParser: ExtensionsDb
  emptyState: {
    tag: string
    line: number
    ref: string
    text: string
  }
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
  [key: string]: () => Promise<string>
}

const defaultEmptyState = {
  tag: `EmptyState`,
  line: 0,
  ref: `EmptyState`,
  text: `All done, nothing todo 🎉`,
  file: ``, // `${pluginName}/gatsby-node.js`,
}

let emptyStateCreated: boolean = false

exports.onCreateNode = async (
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
    sourceInstanceName,
    mode = `mdx`,
    truncateLinks = { length: 32, style: `smart` },
    customTags = [],
    customParsers = {},
    associateParser = {},
    emptyState: customizedEmptyState = defaultEmptyState,
  }: PluginOpts
): Promise<void> => {
  // we only care about File nodes with our sourceInstanceName
  if (
    node.sourceInstanceName !== sourceInstanceName ||
    !(node.internal.type === `File` && leasot.isExtensionSupported(node.ext))
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
      text: async (): Promise<string> => todo.text,
      html: async (): Promise<string> => autolinker.link(todo.text),
      mdx: async (): Promise<string> => {
        const remarkPlugins = []
        if (truncateLinks !== 0) {
          remarkPlugins.push([remarkTruncateLinks, truncateLinks])
        }
        const code = await mdx(todo.text, { remarkPlugins })
        const result = babel.transform(code, {
          configFile: false,
          presets: [
            require(`@babel/preset-react`),
            [
              require(`@babel/preset-env`),
              {
                useBuiltIns: `entry`,
                corejs: 2,
                modules: `false`,
              },
            ],
          ],
        })
        return !result?.code
          ? ``
          : result.code
              .replace(
                /export\s*default\s*function\s*MDXContent\s*/,
                `return function MDXContent`
              )
              .replace(
                /export\s*{\s*MDXContent\s+as\s+default\s*};?/,
                `return MDXContent;`
              )
      },
    }

    const leasotNode = {
      todo: {
        ...todo,
        file___NODE: node.id,
        value: await contentModes[mode](),
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
    // @ts-ignore TODO: how to solve?
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
        '.md': { parserName: 'twigParser', includedFiles: [`.yml`] },
        '.mdx': { parserName: 'twigParser', includedFiles: [`.yml`] },
        ...associateParser,
      },
    })

    /**
     * create emptyState if no not already created and no todos
     */
    if (!todos.length && customizedEmptyState !== null) {
      if (emptyStateCreated) {
        // const todoNodes = getNodesByType(nodeType)
        // if (todoNodes.filter(n => !n.todo.isEmptyState).length) {
        //   const existingEmptyState = todoNodes.find(n => n.todo.isEmptyState)
        //   if (!existingEmptyState) return
        //   // delete emptyState if emptyState created and we find a real todo node
        //   // TODO: deleteNode not working, causes crash due to undefined node
        //   // https://github.com/gatsbyjs/gatsby/issues/10844
        //   // https://github.com/gatsbyjs/gatsby/issues/11172
        //   // https://github.com/gatsbyjs/gatsby/issues/9321
        //   deleteNode({ node: existingEmptyState })
        // }
        // nothing else to do here
        return
      }

      // merge default with customizedEmptyState
      const emptyState = Object.assign(
        {},
        defaultEmptyState,
        customizedEmptyState
      )

      await makeNode({
        ...emptyState /*, isEmptyState: true */,
      })

      // don't create multiple empty states
      emptyStateCreated = true
      return
    }

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

// by https://stackoverflow.com/a/28258687/3484824
// function shortUrl(u) {
//   u = u.replace(/\/$/, ``)
//   const uend = u.slice(u.length - 15)
//   const ustart = u
//     .replace('http://', '')
//     .replace('https://', '')
//     .substr(0, 15)
//   return ustart + '...' + uend
// }

// // by https://stackoverflow.com/a/10903003/3484824
// function shortURL(url, l) {
//   var l = typeof l != 'undefined' ? l : 50
//   var chunk_l = l / 2
//   var url = url
//     .replace(/\/$/, ``)
//     .replace('http://', '')
//     .replace('https://', '')

//   if (url.length <= l) {
//     return url
//   }

//   var start_chunk = shortString(url, chunk_l, false)
//   var end_chunk = shortString(url, chunk_l, true)
//   return start_chunk + '..' + end_chunk
// }
// function shortString(s, l, reverse) {
//   var stop_chars = [' ', '/', '&']
//   var acceptable_shortness = l * 0.8 // When to start looking for stop characters
//   var reverse = typeof reverse != 'undefined' ? reverse : false
//   var s = reverse
//     ? s
//         .split('')
//         .reverse()
//         .join('')
//     : s
//   var short_s = ''

//   for (var i = 0; i < l - 1; i++) {
//     short_s += s[i]
//     if (i >= acceptable_shortness && stop_chars.indexOf(s[i]) >= 0) {
//       break
//     }
//   }
//   if (reverse) {
//     return short_s
//       .split('')
//       .reverse()
//       .join('')
//   }
//   return short_s
// }

/**
 * Date: 2015-10-05
 * Author: Kasper Søfren <soefritz@gmail.com> (https://github.com/kafoso)
 *
 * A truncation feature, where the ellipsis will be placed at a section within
 * the URL making it still somewhat human readable.
 *
 * @param {String} url						 A URL.
 * @param {Number} truncateLen		 The maximum length of the truncated output URL string.
 * @param {String} ellipsisChars	 The characters to place within the url, e.g. "...".
 * @return {String} The truncated URL.
 */
// by https://github.com/gregjacobs/Autolinker.js/blob/master/src/truncate/truncate-smart.ts
// function truncateSmart(url: string, truncateLen: number, ellipsisChars: string): string {
//   url = url.replace(/\/$/, ``)
//   var ellipsisLengthBeforeParsing
//   var ellipsisLength
//   if (ellipsisChars == null) {
//     ellipsisChars = '&hellip;'
//     ellipsisLength = 3
//     ellipsisLengthBeforeParsing = 8
//   } else {
//     ellipsisLength = ellipsisChars.length
//     ellipsisLengthBeforeParsing = ellipsisChars.length
//   }
//   var parse_url = function(url) {
//     var urlObj = {}
//     var urlSub = url
//     var match = urlSub.match(/^([a-z]+):\/\//i)
//     if (match) {
//       urlObj.scheme = match[1]
//       urlSub = urlSub.substr(match[0].length)
//     }
//     match = urlSub.match(/^(.*?)(?=(\?|#|\/|$))/i)
//     if (match) {
//       urlObj.host = match[1]
//       urlSub = urlSub.substr(match[0].length)
//     }
//     match = urlSub.match(/^\/(.*?)(?=(\?|#|$))/i)
//     if (match) {
//       urlObj.path = match[1]
//       urlSub = urlSub.substr(match[0].length)
//     }
//     match = urlSub.match(/^\?(.*?)(?=(#|$))/i)
//     if (match) {
//       urlObj.query = match[1]
//       urlSub = urlSub.substr(match[0].length)
//     }
//     match = urlSub.match(/^#(.*?)$/i)
//     if (match) {
//       urlObj.fragment = match[1]
//       //urlSub = urlSub.substr(match[0].length);  -- not used. Uncomment if adding another block.
//     }
//     return urlObj
//   }
//   var buildUrl = function(urlObj) {
//     var url = ''
//     if (urlObj.scheme && urlObj.host) {
//       url += urlObj.scheme + '://'
//     }
//     if (urlObj.host) {
//       url += urlObj.host
//     }
//     if (urlObj.path) {
//       url += '/' + urlObj.path
//     }
//     if (urlObj.query) {
//       url += '?' + urlObj.query
//     }
//     if (urlObj.fragment) {
//       url += '#' + urlObj.fragment
//     }
//     return url
//   }
//   var buildSegment = function(segment, remainingAvailableLength) {
//     var remainingAvailableLengthHalf = remainingAvailableLength / 2,
//       startOffset = Math.ceil(remainingAvailableLengthHalf),
//       endOffset = -1 * Math.floor(remainingAvailableLengthHalf),
//       end = ''
//     if (endOffset < 0) {
//       end = segment.substr(endOffset)
//     }
//     return segment.substr(0, startOffset) + ellipsisChars + end
//   }
//   if (url.length <= truncateLen) {
//     return url
//   }
//   var availableLength = truncateLen - ellipsisLength
//   var urlObj = parse_url(url)
//   // Clean up the URL
//   if (urlObj.query) {
//     var matchQuery = urlObj.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i)
//     if (matchQuery) {
//       // Malformed URL; two or more "?". Removed any content behind the 2nd.
//       urlObj.query = urlObj.query.substr(0, matchQuery[1].length)
//       url = buildUrl(urlObj)
//     }
//   }
//   if (url.length <= truncateLen) {
//     return url
//   }
//   if (urlObj.host) {
//     urlObj.host = urlObj.host.replace(/^www\./, '')
//     url = buildUrl(urlObj)
//   }
//   if (url.length <= truncateLen) {
//     return url
//   }
//   // Process and build the URL
//   var str = ''
//   if (urlObj.host) {
//     str += urlObj.host
//   }
//   if (str.length >= availableLength) {
//     if (urlObj.host.length == truncateLen) {
//       return (
//         urlObj.host.substr(0, truncateLen - ellipsisLength) + ellipsisChars
//       ).substr(0, availableLength + ellipsisLengthBeforeParsing)
//     }
//     return buildSegment(str, availableLength).substr(
//       0,
//       availableLength + ellipsisLengthBeforeParsing
//     )
//   }
//   var pathAndQuery = ''
//   if (urlObj.path) {
//     pathAndQuery += '/' + urlObj.path
//   }
//   if (urlObj.query) {
//     pathAndQuery += '?' + urlObj.query
//   }
//   if (pathAndQuery) {
//     if ((str + pathAndQuery).length >= availableLength) {
//       if ((str + pathAndQuery).length == truncateLen) {
//         return (str + pathAndQuery).substr(0, truncateLen)
//       }
//       var remainingAvailableLength = availableLength - str.length
//       return (
//         str + buildSegment(pathAndQuery, remainingAvailableLength)
//       ).substr(0, availableLength + ellipsisLengthBeforeParsing)
//     } else {
//       str += pathAndQuery
//     }
//   }
//   if (urlObj.fragment) {
//     var fragment = '#' + urlObj.fragment
//     if ((str + fragment).length >= availableLength) {
//       if ((str + fragment).length == truncateLen) {
//         return (str + fragment).substr(0, truncateLen)
//       }
//       var remainingAvailableLength2 = availableLength - str.length
//       return (str + buildSegment(fragment, remainingAvailableLength2)).substr(
//         0,
//         availableLength + ellipsisLengthBeforeParsing
//       )
//     } else {
//       str += fragment
//     }
//   }
//   if (urlObj.scheme && urlObj.host) {
//     var scheme = urlObj.scheme + '://'
//     if ((str + scheme).length < availableLength) {
//       return (scheme + str).substr(0, truncateLen)
//     }
//   }
//   if (str.length <= truncateLen) {
//     return str
//   }
//   var end = ''
//   if (availableLength > 0) {
//     end = str.substr(-1 * Math.floor(availableLength / 2))
//   }
//   return (
//     str.substr(0, Math.ceil(availableLength / 2)) +
//     ellipsisChars +
//     end
//   ).substr(0, availableLength + ellipsisLengthBeforeParsing)
// }

// by https://github.com/gregjacobs/Autolinker.js/blob/master/src/truncate/truncate-middle.ts
function truncateMiddle(
  _url: string,
  truncateLen: number,
  ellipsisChars: string
): string {
  const url: string = _url.replace(/\/$/, ``)

  if (url.length <= truncateLen) {
    return url
  }

  let ellipsisLengthBeforeParsing: number
  let ellipsisLength: number

  if (ellipsisChars == null) {
    ellipsisChars = '&hellip;'
    ellipsisLengthBeforeParsing = 8
    ellipsisLength = 3
  } else {
    ellipsisLengthBeforeParsing = ellipsisChars.length
    ellipsisLength = ellipsisChars.length
  }

  let availableLength: number = truncateLen - ellipsisLength
  let end: string = ''
  if (availableLength > 0) {
    end = url.substr(-1 * Math.floor(availableLength / 2))
  }
  return (
    url.substr(0, Math.ceil(availableLength / 2)) +
    ellipsisChars +
    end
  ).substr(0, availableLength + ellipsisLengthBeforeParsing)
}

/**
 * Add types and resolvers
 */
// module.exports.sourceNodes = ({ actions, schema }, { sourceInstanceName }) => {
//   const { createTypes } = actions
//   const nodeName = upperFirst(sourceInstanceName)
//   createTypes([
//     /**
//      * `${nodeName}Todo`
//      * Ensure todo.file is a string
//      */
//     schema.buildObjectType({
//       name: `${nodeName}Todo`,
//       fields: {
//         file: `File`,
//       },
//     }),

//     /**
//      * Add types and resolvers to Mdx
//      */
//     schema.buildObjectType({
//       name: nodeName,
//       fields: {
//         // set todo to above declared ${nodeName}Todo types
//         todo: `${nodeName}Todo!`,
//       },
//       interfaces: [`Node`],
//     }),
//   ])
// }
