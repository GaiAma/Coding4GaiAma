# remark-truncate-links

## shortens plain links in markdown you haven't wrapped in `[]()`

Actually it'll shorten [auto] linked URLs where the URL and the text are equal as in `[example.com](example.com)`  
So this plugin doesn't work if you want to show a full URL longer than `length`.
Written in **`Typescript`**.

### Install

```bash
yarn add -D remark-truncate-links
# or
npm i -D remark-truncate-links
```

### Options

```js
{
  style: `smart`, // one of [`smart`, `middle`, `end`]
  length: 30,
}
// showing default options
```

### Usage

#### In gatsby-plugin-mdx

```js
// default options
{
  resolve: `gatsby-plugin-mdx`,
  options: {
    remarkPlugins: [
      require('remark-truncate-links').remarkTruncateLinks,
    ],
  },
}

// providing options
{
  resolve: `gatsby-plugin-mdx`,
  options: {
    remarkPlugins: [
      [
        require('remark-truncate-links').remarkTruncateLinks,
        { style: 'middle' },
      ],
    ],
  },
}
```

#### Using Unified

```js
import unified from 'unified'
import remarkParse from 'remark-parse'
import stringify from 'remark-stringify'
import { remarkTruncateLinks } from 'remark-truncate-links'

// with default options
unified()
  .use(remarkParse)
  .use(remarkTruncateLinks)

// providing options
unified()
  .use(remarkParse)
  .use(remarkTruncateLinks, { style: `middle`, length: 40 })
```

#### As MDX plugin

```js
import mdx from '@mdx-js/mdx'
import { remarkTruncateLinks } from 'remark-truncate-links'
const options = { length: 60 }

mdx(`mdxString`, { remarkPlugins: [[remarkTruncateLinks, options]] })
```

### Ideas

- Truncate based on host, for example truncate GitHub repos to repo name like [GaiAma/Coding4GaiAma](https://github.com/GaiAma/Coding4GaiAma/)
- Check out https://github.com/williambelle/crop-url

### Used in

- [gatsby-transformer-leasot](https://www.npmjs.com/package/gatsby-transformer-leasot) - make your TODOs and FIXMEs from comments in your files queryable via GraphQL
- [coding4.gaiama.org](https://coding4.gaiama.org/en/) - As MDX plugin to truncate all links not manually named.

### Credits

- [Autolinker.js](https://www.npmjs.com/package/autolinker) - is used for actual truncation
- [Unified](https://unifiedjs.com/) & [Remark](https://www.npmjs.com/package/remark)

### License

MIT
