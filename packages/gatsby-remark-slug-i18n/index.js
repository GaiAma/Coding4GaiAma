'use strict'

const toString = require('mdast-util-to-string')
const visit = require('unist-util-visit')
const speakingurl = require(`speakingurl`)

/**
 * inspired by https://github.com/remarkjs/remark-slug
 */

module.exports = (
  { markdownAST, markdownNode, ...props },
  pluginOptions = {}
) => {
  if (markdownNode && markdownNode.fields && markdownNode.fields.lang) {
    visit(markdownAST, 'heading', node => {
      const lang = markdownNode.fields.lang
      if (!node.id) {
        const data = node.data || (node.data = {})
        const props = data.hProperties || (data.hProperties = {})
        let id = props.id
        id = id
          ? speakingurl(id, { lang })
          : speakingurl(toString(node), { lang })
        node.id = id
        props.id = id
      }
    })
  }

  return markdownAST
}
