# gatsby-transformer-leasot

Uses [leasot](https://github.com/pgilad/leasot) to parse select source files for `TODO:`, `FIXME:` and custom comments.

**[Live Example](https://coding4.gaiama.org/en/roadmap)**

### Install

```bash
yarn add -D gatsby-transformer-leasot
# or
npm i -D gatsby-transformer-leasot
```

**REQUIRES: [gatsby-source-filesystem](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem)**

### Usage

```js
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: __dirname,
    // has to match `sourceInstanceName` field in gatsby-transformer-leasot
    name: `roadmap`,
    ignore: [
      // can be customized, it's just what works for me at the moment
      /\.*.*\/(node_modules|\.cache|public|static|dist|\.yarn)\/./,
      /\.*.\.(log|jpe?g|png|gif|ico|json|map|gz|pdf)/,
    ],
  },
},
{
  resolve: `gatsby-transformer-leasot`,
  options: {
    // has to match the gatsby-source-filesystem `name` field
    // defaults to leasot. Can be omitted if source instane name = 'leasot'
    sourceInstanceName: `leasot`,

    // parse `NOTE:` in addition to `TODO:` & `FIXME:`
    customTags: [`NOTE`],

    mode: 'mdx', // <- default, supports 'mdx', 'html', 'text'

    // allows to associate and define additional parsers, showing here the predefined
    associateParser: {
      '.md': { parserName: 'twigParser', includedFiles: ['.yml'] },
      '.mdx': { parserName: 'twigParser', includedFiles: ['.yml'] },
    },
    customParsers: {},
  },
},
```

More about `associateParsers` & `customParsers` in [Leasot's docs](https://pgilad.github.io/leasot/interfaces/parseconfig.html)
