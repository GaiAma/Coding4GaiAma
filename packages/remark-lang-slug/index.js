'use strict';

const toString = require('mdast-util-to-string');
const visit = require('unist-util-visit');
const rehype = require('rehype');
const { slugify } = require('@gaiama/slugger');
// NOTE: consider https://github.com/sindresorhus/normalize-url
// check out https://www.npmjs.com/package/url-slug https://github.com/Trott/node-slug

const typesToSearch = ['heading', 'table', 'image', 'html'];

/**
 * DONE: support duplicate headings like github-slugger appending a counter '-n'
 * use cases https://github.com/markedjs/marked/issues/879
 * and custom IDs / https://github.com/imcuttle/remark-heading-id
 */

const addHtmlSlug = ({ slug }) => {
  return tree => {
    tree.children[0].properties.id = slug;
  };
};

/**
 * inspired by https://github.com/remarkjs/remark-slug
 */
module.exports = (pluginOptions = {}) => ast => {
  visit(ast, typesToSearch, node => {
    if (!node.id) {
      const data = node.data || (node.data = {});
      const props = data.hProperties || (data.hProperties = {});
      const id =
        props.id || node.type !== 'heading' ? 'figure' : toString(node);
      let slug = slugify(id);

      node.id = slug;
      props.id = slug;

      if (node.type === 'html') {
        node.value = rehype()
          .data('settings', { fragment: true })
          .use(addHtmlSlug, { slug })
          .processSync(node.value)
          .toString();
      }
    }
  });
};

module.exports.reset = slugify.reset;
