'use strict'

const toString = require('mdast-util-to-string')
const visit = require('unist-util-visit')
// TODO: pretty old? https://www.npmjs.com/package/speakingurl
// NOTE: consider https://github.com/sindresorhus/normalize-url
// NOTE: follow [sindresorhus/slugify#7](https://github.com/sindresorhus/slugify/issues/7) not supporting i18n
// check out
// https://www.npmjs.com/package/url-slug
// https://github.com/Trott/node-slug
// https://github.com/lovell/limax/blob/master/lib/limax.js even tho it uses speakingurl under the hood
const speakingurl = require(`speakingurl`)

const typesToSearch = ['heading', 'figure', 'table']

/**
 * support duplicate headings like github-slugger appending a counter `-n`
 * use cases https://github.com/markedjs/marked/issues/879
 *
 * example implementation
 * https://github.com/Flet/github-slugger/blob/master/index.js
 * test cases https://github.com/Flet/github-slugger/blob/master/test/index.js#L66
 *
 * https://www.halostatue.ca/posts/markdown-generating-heading-ids/
 *
 * and custom IDs / https://github.com/imcuttle/remark-heading-id
 */

/**
 * inspired by https://github.com/remarkjs/remark-slug
 */
module.exports = (
  { markdownAST, markdownNode, ...props },
  pluginOptions = {}
) => {
  if (markdownNode && markdownNode.fields && markdownNode.fields.lang) {
    const counterDb = {}

    visit(markdownAST, typesToSearch, node => {
      if (node.type === 'figure') console.log('\n', node, '\n', toString(node))
      const lang = markdownNode.fields.lang || `en`
      if (!node.id) {
        const data = node.data || (node.data = {})
        const props = data.hProperties || (data.hProperties = {})
        let id = props.id // || node.type !== 'heading' ? 'figure' : ''
        id = id
          ? speakingurl(id, { lang })
          : speakingurl(toString(node), { lang })

        counterDb[id] =
          typeof counterDb[id] === 'number' ? counterDb[id] + 1 : 1

        if (counterDb[id] > 1) {
          id = `${id}-${counterDb[id]}`
        }

        node.id = id
        props.id = id
      }
    })
  }

  return markdownAST
}
