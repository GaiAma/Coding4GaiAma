/**
 * Make unicode gemojis accessible
 * by wrapping them in aria labeled <span>'s
 * code mostly reused from https://gitlab.com/staltz/remark-linkify-regex
 */

// const visitWithParents = require('unist-util-visit-parents')
const flatMap = require('unist-util-flatmap')
const visit = require('unist-util-visit')
const emojiRegex = require('emoji-regex')
const gemoji = require('gemoji')

function removeExtremes(regex, optionalFlags) {
  return new RegExp(
    regex.source.replace(/^\^/, '').replace(/\$$/, ''),
    optionalFlags || regex.flags
  )
}

function notInMarkdownLink(regex, optionalFlags) {
  return new RegExp(
    regex.source + '(?! *\\))(?! *])',
    optionalFlags || regex.flags
  )
}

function buildTextNode(props) {
  return { type: 'text', value: props.value }
}

function buildEmojiNode(emoji, children) {
  const description = gemoji.unicode[emoji]
    ? gemoji.unicode[emoji].description
    : ''
  // https://github.com/syntax-tree/hast#text
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

function h(type, props, children) {
  if (type === 'text') return buildTextNode(props, children)
  if (type === 'emoji') return buildEmojiNode(props, children)
  throw new Error('mdast hyperscript not supported for type ' + type)
}

function splitTextNode(textNode) {
  const oldText = textNode.value
  // const regex = notInMarkdownLink(removeExtremes(emojiRegex()), 'g')
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
    newNodes.push(h('emoji', emoji, [h('text', { value: emoji })]))
    startTextIdx = regex.lastIndex
  }
  const remainingText = oldText.slice(startTextIdx)
  if (remainingText.length > 0) {
    newNodes.push(h('text', { value: remainingText }))
  }
  return newNodes
}

module.exports = () => ast => {
  // visitWithParents(ast, 'text', (textNode, parents) => {
  //   if (parents.length > 0 && parents[parents.length - 1].type === 'span') {
  //     textNode._ignoreMe = true
  //     return
  //   }
  // })

  flatMap(ast, node => {
    if (node.type !== 'text') {
      return [node]
    }
    // if (node._ignoreMe) {
    //   delete node._ignoreMe
    //   return [node]
    // }
    return splitTextNode(node)
  })

  return ast
}
