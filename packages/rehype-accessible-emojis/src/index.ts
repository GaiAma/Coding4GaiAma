/**
 * Make unicode gemojis accessible
 * by wrapping them in aria labeled <span>'s
 * code mostly reused from https://gitlab.com/staltz/remark-linkify-regex
 *
 * DONE: improve so it won't wrap emojis in <scripts> etc
 * https://github.com/rehypejs/rehype/pull/30#issuecomment-570914503
 * https://github.com/syntax-tree/hast-util-find-and-replace/blob/master/index.js#L9
 */

/// <reference path="../types/gemoji/index.d.ts" />
/// <reference path="../types/unist-util-flatmap/index.d.ts" />
/// <reference path="../types/hast-util-is-element/index.d.ts" />

import { Node, Literal } from 'unist'
import flatMap from 'unist-util-flatmap'
import is from 'hast-util-is-element'
import emojiRegex from 'emoji-regex'
const gemoji = require('gemoji')

const defaultIgnore = ['title', 'script', 'style', 'svg', 'math']

type Opaque<K, T> = T & { __TYPE__: K }

type NodeWithChildren = Node & {
  children?: Node[]
  value?: string
}

function removeExtremes(
  regex: RegExp,
  optionalFlags?: Opaque<'RegexFlags', string>
) {
  return new RegExp(
    regex.source.replace(/^\^/, '').replace(/\$$/, ''),
    optionalFlags || regex.flags
  )
}

function buildTextNode(value: string) {
  return { type: 'text', value }
}

function buildEmojiNode(emoji: string, children?: Node[]) {
  const description = gemoji.unicode[emoji]
    ? gemoji.unicode[emoji].description
    : ''
  return {
    type: `element`,
    tagName: `span`,
    properties: {
      role: `img`,
      ariaLabel: description,
      // set aria-hidden="true" if no description available
      ...(!!!description ? { ariaHidden: true } : {}),
    },
    children,
  }
}

type hProps = { value: string }
function h(type: string, props: hProps, children?: Node[]) {
  if (type === 'text') return buildTextNode(props.value)
  if (type === 'emoji') return buildEmojiNode(props.value, children)
  throw new Error('mdast hyperscript not supported for type ' + type)
}

function splitTextNode(textNode: Literal) {
  const oldText = textNode.value as string
  const regex = removeExtremes(emojiRegex())
  const newNodes = []
  let startTextIdx = 0
  let output
  while ((output = regex.exec(oldText)) !== null) {
    const endTextIdx = output.index
    if (startTextIdx !== endTextIdx) {
      newNodes.push(
        h('text', { value: oldText.slice(startTextIdx, endTextIdx) })
      )
    }
    const emoji = output[0]
    newNodes.push(h('emoji', { value: emoji }, [h('text', { value: emoji })]))
    startTextIdx = regex.lastIndex
  }
  const remainingText = oldText.slice(startTextIdx)
  if (remainingText.length > 0) {
    newNodes.push(h('text', { value: remainingText }))
  }
  return newNodes
}

export default () => (ast: NodeWithChildren) => {
  flatMap(ast, (node: Literal, _?: number, parent?: Literal) => {
    if (node.type !== 'text' || (parent && is(parent as Node, defaultIgnore))) {
      return [node]
    }

    return splitTextNode(node)
  })

  return ast
}
