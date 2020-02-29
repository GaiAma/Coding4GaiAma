# gatsby-transformer-leasot

Uses [leasot](https://github.com/pgilad/leasot) to parse select source files for `TODO:`, `FIXME:` and custom comments. Written in **`Typescript`**.

## Example

```js
// FIXME(Reference): improve example
// TODO: you can add a reference like this as well /Reference
// TODO: example without reference
const comeBackToImprove = () => console.log('Please improve me')
```

will be transformed to

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
You can use [gatsby-theme-leasot](https://github.com/GaiAma/Coding4GaiAma/tree/master/packages/gatsby-theme-leasot) for convenience.  
Alternatively, since v1.2.0, you can bring your own source plugin and set the `internalType` accordingly.

## Usage

```js
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: __dirname,
    // has to match `sourceInstanceName` field in gatsby-transformer-leasot
    name: `leasot`,
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
    sourceInstanceName: `leasot`,
    // parse `NOTE:` in addition to `TODO:` & `FIXME:`
    customTags: [`NOTE`],
    mode: 'mdx',
  },
},
```

> For `mdx` to work you have to wrap the `value` in `MDXRenderer` provided by [gatsby-plugin-mdx](https://www.npmjs.com/package/gatsby-plugin-mdx)

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

> **Note:** The name `allLeasot` depends on the provided `sourceInstanceName` in the configs. So when you change it you have to change the `name` option of gatsby-source-filesystem accordingly, lets say `todo` then you query for `allTodo` or `todo` if you just want a single one.

## All config options

| name                              | type            | default                     | description                                                                                                                                                                                                                                          |
| --------------------------------- | --------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sourceInstanceName                | `string`        | "leasot"                    | Has to match the `name` prop of `gatsby-source-filesystem`.                                                                                                                                                                                          |
| customTags                        | `array`         | []                          | Other tags to look for (besides todos and fixmes). Tags are case-insensitive and are strict matching, i.e PROD tag will match PROD but not PRODUCTS. More in [Leasot's Docs](https://pgilad.github.io/leasot/interfaces/parseconfig.html#customtags) |
| mode                              | `string`        | "text"                      | Supports one of: `text`, `mdx`, `html`.                                                                                                                                                                                                              |
| truncateLinks                     | `int`\|`object` | {length: 32,style: "smart"} | Provide `int` to change the length only. `style` can be one of: `smart`, `middle`, `end`.                                                                                                                                                            |
| associateParser                   | `object`        | {}                          | Associate the filetypes with parsers. This allows adding support for new filetypes. More in [Leasot's Docs](https://pgilad.github.io/leasot/interfaces/parseconfig.html#associateparser)                                                             |
| customParsers                     | `object`        | {}                          | Extend the parsers by parserName, for example override the defaultParser or add a new parser. [Leasot's Docs](https://pgilad.github.io/leasot/interfaces/parseconfig.html#customparsers)                                                             |
| internalType <br/> (since v1.2.0) | `string`        | "File"                      | Has to match `node.internal.type`                                                                                                                                                                                                                    |

> `modifiedTime` works only locally as file time will be the same on CI

A table showing the [Supported Languages](https://github.com/pgilad/leasot/#supported-languages) & the **comment format** spec by Leasot in their [readme](https://github.com/pgilad/leasot/#comment-format).

## Provides its own Schema

That means if your sourced files don't contain anything for gatsby-transformer-leasot to parse it won't crash as Gatsby will be prepared. Also congratulations for finishing off all notes, fixmes & todos 🥳

## Changelog

- v1.1.0 - add [he](http://npmjs.com/package/he) to entity encode the comments

## Credits

- Huge thanks of course to [@GiladPeleg](https://twitter.com/GiladPeleg) and their amazing work on [Leasot](https://github.com/pgilad/leasot)
- `truncateLinks` uses [remark-truncate-links](https://www.npmjs.com/package/remark-truncate-links)

## License

MIT
