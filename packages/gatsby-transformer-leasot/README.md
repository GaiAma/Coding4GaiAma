# gatsby-transformer-leasot

Uses [leasot](https://github.com/pgilad/leasot) to parse select source files for `TODO:`, `FIXME:` and custom comments.

## Example

```js
// FIXME(Reference): improve example
// TODO: you can add a reference like this as well /Reference
// TODO: example without reference
const comeBackToImprove = () => console.log('Please improve me')
```

will be transformed

```json
{
  "todo": {
    "ref": "Reference",
    "line": 7,
    "value": "improve example",
    "file": {
      "relativePath": "README.md"
    }
  }
}
```

> `file` will be a File reference, so you can query anything `gatsby-source-filesystem` provides

**[Live Example](https://coding4.gaiama.org/en/roadmap)**

## Install

```bash
yarn add -D gatsby-transformer-leasot
# or
npm i -D gatsby-transformer-leasot
```

**REQUIRES: [gatsby-source-filesystem](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem)**

## Usage

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

// without options
`gatsby-transformer-leasot`,

// with options
{
  resolve: `gatsby-transformer-leasot`,
  options: {
    // has to match the gatsby-source-filesystem `name` prop
    // defaults to leasot. Can be omitted if source instane name = 'leasot'
    sourceInstanceName: `leasot`,

    // parse `NOTE:` in addition to `TODO:` & `FIXME:`
    customTags: [`NOTE`],

    mode: 'text', // <- default, supports 'mdx', 'html', 'text'

    // link truncation works only in `mdx` mode at the moment
    // can be set to 0 to disable
    // { truncateLinks: 40 } to change just the length
    // showing default
    truncateLinks: {
      length: 32,
      style: 'smart',
    },

    // allows to associate and define additional parsers, showing here the predefined
    associateParser: {
      '.md': { parserName: 'twigParser', includedFiles: ['.yml'] },
      '.mdx': { parserName: 'twigParser', includedFiles: ['.yml'] },
    },
    customParsers: {},
  },
},
```

> `mdx` - you have to wrap the `value` in `MDXRenderer` provided by [gatsby-plugin-mdx](https://www.npmjs.com/package/gatsby-plugin-mdx)

More about `associateParsers` & `customParsers` in [Leasot's docs](https://pgilad.github.io/leasot/interfaces/parseconfig.html)

## Query

```graphql
allLeasot(
  sort: { fields: [todo___modifiedTime], order: DESC }
) {
  group(field: todo___tag) {
    fieldValue
    totalCount
    nodes {
      id
      todo {
        tag
        line
        ref
        value
        modifiedTime(formatString: "YYYY-MM-DD H:mm")
        file {
          relativePath
        }
      }
    }
  }
}
```

> `modifiedTime` works only locally as file time will be the same on CI
