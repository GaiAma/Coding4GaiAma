# remark-lang-slug

Predecessor to [gatsby-remark-lang-slug](https://github.com/GaiAma/Coding4GaiAma/tree/master/packages/gatsby-remark-lang-slug#readme)

It's almost the same as [gatsby-remark-slug](https://www.npmjs.com/package/gatsby-remark-slug) tho it uses [@gaiama/slugger](https://github.com/GaiAma/Coding4GaiAma/tree/master/packages/gaiama-slugger) instead of [github-slugger](https://github.com/Flet/github-slugger) for proper slugs on pages in languages other than english.

## ⚠️ 🚨 NOT YET PUBLISHED!! 🚨⚠️

<!-- ### Installation

```bash
yarn add -D remark-lang-slug
# or
npm i -D remark-lang-slug
```

```js
// gatsby-config.js
{
  resolve: `gatsby-plugin-mdx`,
  options: {
    remarkPlugins: [
      `remark-lang-slug`,
    ]
  }
}
```

### Usage -->

### Ideas

> Maybe add support for custom id's like `### My Great Heading {#custom-id}` as [remark-heading-id](https://github.com/imcuttle/remark-heading-id) does

Can be handled via [remark-heading-id](https://github.com/imcuttle/remark-heading-id) as `remark-lang-slug` won't touch existing id's.
