# gatsby-theme-leasot

Configures `gatsby-source-filesystem` & [gatsby-transformer-leasot]

## Install

```bash
yarn add -D gatsby-theme-leasot
# or
npm i -D gatsby-theme-leasot
```

### Usage

```js
// in your gatsby-config.js
{
  resolve: 'gatsby-theme-leasot',
  options: {
    // required to define from where gatsby-transformer-leasot starts to scan
    sourcePath: __dirname,
    // optional, defaults to ['TODO', 'FIXME']
    customTags: ['NOTE', 'DONE'],
    // optional, default 'text', supports one of 'text', 'html', 'mdx'
    mode: 'mdx',
  },
},
```

## Related
- [gatsby-transformer-leasot]
- [leasot]
- [live example: Roadmap on Coding4GaiAma](https://coding4.gaiama.org/en/roadmap)

## License

[MIT](/license) © [CanRau](https://www.canrau.com/)

[gatsby-transformer-leasot]: https://github.com/GaiAma/Coding4GaiAma/tree/master/packages/gatsby-transformer-leasot
[leasot]: https://github.com/pgilad/leasot
