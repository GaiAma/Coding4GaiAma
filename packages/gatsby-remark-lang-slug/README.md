# gatsby-remark-lang-slug

It's almost the same as [gatsby-remark-slug](https://www.npmjs.com/package/gatsby-remark-slug) yet it uses [speakingurl](https://github.com/pid/speakingurl) instead of [github-slugger](https://github.com/Flet/github-slugger) for proper slugs on pages in languages other than English.

### Installation

```bash
yarn add -D gatsby-remark-lang-slug
# or
npm i -D gatsby-remark-lang-slug
```

```js
// gatsby-config.js
{
  resolve: `gatsby-plugin-mdx`,
  options: {
    gatsbyRemarkPlugins: [
      `gatsby-remark-lang-slug`,
    ]
  }
}
```

### Usage

It expects the language to be set as node field `lang` using [`createNodeField`](https://www.gatsbyjs.org/docs/actions/#createNodeField) in [`onCreateNode`](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode) hook.

```js
// gatsby-node.js
exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  createNodeField({
    node,
    name: `lang`,
    value: `de`,
  })
}
```

It'll default to `en` (English) if no lang has been set.

### Supported languages

Please check out [speakingurl's list of supported languages](https://github.com/pid/speakingurl#getsluginput-options)

### Ideas

Maybe add support for custom id's like `### My Great Heading {#custom-id}` as [remark-heading-id](https://github.com/imcuttle/remark-heading-id) does
