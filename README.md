<!-- <h1 align="center"><a href="https://coding4.gaiama.org" title="GaiAma.org">Coding4.GaiAma.org</a></h1> -->
<h1 align="center">Coding4.GaiAma.org</h1>

<p align="center">
  <a href="https://donate.gaiama.org/" title="Donate to help us protect more rainforest from being destroyed"><img src="https://img.shields.io/badge/$-support-green.svg"></a>
  <a href="http://makeapullrequest.com/" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
  <a href="https://www.netlify.com" title="Frontend hosted on Netlify"><img src="https://api.netlify.com/api/v1/badges/2f70a68f-3b42-44ca-8dbe-189f030dbd64/deploy-status" alt="Netlify Status"/></a>
  <a href="https://nodejs.org" title="Node.js 12.10"><img src="https://img.shields.io/badge/node.js-12.10-%23026e00.svg"/></a>
</p>

<p align="center">
  <a title="Static Site Generator: GatsbyJS" href="https://www.gatsbyjs.org" target="_blank"><img src="https://www.gaiama.org/gatsby_logo.svg" width="40" alt="GatsbyJS Logo"></a> <a title="Hoster: Netlify" href="https://www.netlify.com" target="_blank"><img src="https://www.gaiama.org/netlify_logo.svg" width="40" alt="Netlify Logo"></a>
</p>

## Features

- [GatsbyJS](https://www.gatsbyjs.org/) - React based Static Site Generator (SSG)
- [Netlify](https://www.netlify.com/) - Static website hosting
- [Theme UI](https://theme-ui.com/) & [Emotion](https://emotion.sh/) for styling
- [Node.js 12.10](https://nodejs.org/en/) - not necessarily the minimum but what it's developed in
- [MDX](https://www.gatsbyjs.org/docs/mdx/) - for everything content
- [Offline support](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-offline#readme) - PWA supporting "Add to Homescreen"
- [gatsby-image](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image#readme) & [gatsby-remark-images](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images#readme) - for responsive images
- [Yarn](https://yarnpkg.com) - v1.21.1 using policies

## Packages

- [gatsby-transformer-leasot](packages/gatsby-transformer-leasot) - lets you query `TODO:` comments in your source code [more](#roadmap)
- [remark-truncate-links](packages/remark-truncate-links) - shortens plain links in markdown you haven't wrapped in `[]()` used in `gatsby-transformer-leasot`
- [gatsby-remark-slug-i18n](packages/gatsby-remark-slug-i18n) - The same as [remark-slug](https://github.com/remarkjs/remark-slug) using [speakingurl](https://github.com/pid/speakingurl) instead of [github-slugger](https://github.com/Flet/github-slugger)
- [rehype-a11y-emoji](packages/rehype-a11y-emoji) - basically same as [gatsby-remark-a11y-emoji](https://github.com/florianeckerstorfer/gatsby-remark-a11y-emoji) but for rehype as I think I couldn't get the other one working in MDX

## Roadmap

I've developed a gatsby transformer plugin which integrates [leasot](https://github.com/pgilad/leasot/) into Gatsby's content pipeline to auto generate a roadmap based on certain comments within the source code like `TODO:` & `FIXME:`

[Live Roadmap](https://coding4.gaiama.org/en/roadmap)

## Not yet implemented

- Typescript
- [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog)
- [commit message template](.github/commit_template)
- [All Contributors by Kent C. Dodds](https://github.com/kentcdodds/all-contributors)

## License

[MIT](LICENSE) [GaiAma](https://www.gaiama.org)
