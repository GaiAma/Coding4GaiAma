/**
 * NOTE: https://wooorm.com/write-music/ & https://unifiedjs.com/learn/guide/create-an-editor/
 * NOTE: check out webmentions
 * https://www.npmjs.com/package/gatsby-plugin-webmention
 * https://webmention.io/
 * https://brid.gy/
 *
 * DONE: Check out https://npm.im/gatsby-plugin-schema-snapshot/ to lock-down gQL schema
 *
 * NOTE: [hover-cards](https://github.com/sindresorhus/module-requests/issues/115)
 *
 * NOTE: check out https://gatsby-remark-design-system.netlify.com/
 *
 * NOTE: gatsby-plugin for https://ffoodd.github.io/a11y.css/ ?
 * check out GaiAma/gaiama.org/packages..
 *
 * NOTE: use https://github.com/nytimes/react-tracking ?
 *
 * NOTE: add fancy page transitions
 * https://github.com/gatsbyjs/gatsby/blob/master/examples/using-page-transitions/src/components/transition.js
 *
 * NOTE: use react-icons?
 *
 * NOTE: consider https://www.gatsbyjs.org/packages/gatsby-remark-embedder/
 *
 * NOTE: any need for [semantic-release-plus](https://github.com/semantic-release-plus/semantic-release) ([spectrum](https://spectrum.chat/semantic-release/general/commit-filtering-and-other-monorepo-requests~5fc5901a-121e-40e9-b7a2-8a4840fe1341))?
 *
 */
const { resolve } = require(`path`)
const { round } = require(`lodash`)
const { rehypeNodeCustomizer } = require(`rehype-node-customizer`)
const { rehypeAccessibleEmojis } = require(`rehype-accessible-emojis`)
const { remarkResponsiveCssTables } = require(`remark-responsive-css-tables`)
const { version, license } = require(`./package.json`)
const {
  branch,
  isProduction,
  siteUrl,
  repository,
  // isDebug,
} = require(`./src/utils/environment-helpers.js`)

module.exports = {
  siteMetadata: {
    title: `Coding4GaiAma`,
    author: `GaiAma.org`,
    description: `Open Source straight from the jungle`,
    siteUrl,
    version,
    branch,
    license,
    repository,
  },
  plugins: [
    `gatsby-plugin-schema-snapshot`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content`,
        name: `content`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: resolve(__dirname, `../..`),
    //     name: `leasot`,
    //     ignore: [
    //       /\.*.*\/(node_modules|\.cache|public|static|dist)\/./,
    //       /\.*.\.(log|jpe?g|png|gif|ico|json|map|gz|pdf|yarn|d\.ts)/,
    //       /packages\/.*\/lib\//,
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `GitHub`,
    //     fieldName: `github`,
    //     url: `https://api.github.com/graphql`,
    //     headers: {
    //       Authorization: `bearer ${process.env.C4G_GITHUB_TOKEN}`,
    //     },
    //     // Additional options to pass to node-fetch
    //     fetchOptions: {},
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-leasot`,
    //   options: {
    //     customTags: [`NOTE`, `DONE`],
    //     mode: `mdx`,
    //   },
    // },
    {
      resolve: `gatsby-theme-leasot`,
      options: {
        sourcePath: resolve(__dirname, `../..`),
        customTags: [`NOTE`, `DONE`],
        mode: `mdx`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        rehypePlugins: [
          rehypeAccessibleEmojis,
          [
            // NOTE: install or improve gatsby-remark-wrap-images then open source it
            rehypeNodeCustomizer,
            {
              childrenTypes: [{ tagName: 'figure' }, { tagName: 'img' }],
              customizer: ({ node, cleanChildren }) => {
                node.tagName = 'div'
                node.children = cleanChildren
                node.properties.class = `inline-gallery inline-gallery-${cleanChildren.length}`
                return node
              },
            },
          ],
        ],
        remarkPlugins: [
          require(`remark-heading-id`),
          require(`remark-breaks`),
          // require(`remark-capitalize`),
          // require(`remark-title`),
          remarkResponsiveCssTables,
          require(`remark-github`),
          require(`remark-kbd`),
          require(`remark-numbered-footnotes`),
          [
            require(`remark-textr`),
            { plugins: [require(`typographic-single-spaces`)] },
          ],
          require('remark-truncate-links').remarkTruncateLinks,
        ],
        gatsbyRemarkPlugins: [
          {
            // NOTE: consider [gatsby-remark-images-anywhere](https://github.com/d4rekanguok/gatsby-remark-images-anywhere)
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: `#eae9e9`,
              linkImagesToOriginal: true,
              showCaptions: true,
              quality: 75,
              wrapperStyle: f => `flex:${round(f.aspectRatio, 2)};`,
              ignoreFileExtensions: [], // the quick fix? #6698
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: false,
            },
          },
          // { resolve: `gatsby-remark-external-links` },
          // {
          //   // NOTE: try https://github.com/andrewbranch/gatsby-remark-vscode
          //   // NOTE: check out https://mdxjs.com/guides/live-code
          //   // NOTE: check out https://mdxjs.com/guides/syntax-highlighting
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     // inlineCodeMarker: `+`,
          //     showLineNumbers: true,
          //     noInlineHighlight: false,
          //   },
          // },
          `gatsby-remark-gemoji-to-emoji`,
          // NOTE: gatsby-remark-abbr not working? Accessible solution for sidenotes/footnotes? Even necessary?
          // maybe make mdx plugin
          // accessible footnotes
          // https://www.sitepoint.com/accessible-footnotes-css/
          // https://codepen.io/SitePoint/pen/QbMgvY?editors=1100
          // https://github.com/zestedesavoir/zmarkdown/blob/master/packages/remark-numbered-footnotes
          // maybe make accessible footnote plugin like https://www.jamesrmeyer.com/otherstuff/easy-footnotes-for-web-pages.html
          // https://blog.apaonline.org/2019/01/17/eliminating-footnotes-makes-philosophy-more-accessible/
          // footnotes https://en.wikipedia.org/wiki/Fields_Medal
          // `gatsby-remark-abbr`,
          // DONE: hash urls not jumping to anchor?
          `gatsby-remark-lang-slug`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: isProduction,
      },
    },
    // {
    //   resolve: `@lekoarts/gatsby-theme-specimens`,
    //   options: {
    //     contrastGuidelines: `AAA`,
    //     codeExample: false,
    //     rootFontSize: 16,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     // implementation: require(`sass`),
    //     postCssPlugins: [
    //       // require(`postcss-import`)({
    //       //   path: [resolve(__dirname, `..`, `..`), resolve(__dirname)],
    //       // }),
    //       require(`tailwindcss`),
    //       require(`postcss-preset-env`)({ stage: 0 }),
    //     ],
    //   },
    // },
    // {
    //   // https://github.com/anantoghosh/gatsby-plugin-purgecss#whitelist-solutions
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: isDebug,
    //     printAll: isDebug,
    //     tailwind: true,
    //     whitelistPatterns: [/^(gatsby|theme|has-highlighted)/],
    //     whitelistPatternsChildren: [/token/],
    //   },
    // },
    {
      resolve: `@canrau/gatsby-plugin-react-head`,
      options: {
        whitelist: [
          `html`,
          `title`,
          `[name="description"]`,
          `[name="apple-mobile-web-app-title"]`,
          `[name="application-name"]`,
          `[property^="og:"]`,
          `[property^="fb:"]`,
          `[property^="twitter:"]`,
          `[rel="alternate"]`,
          `[rel="canonical"]`,
          `[property="^article:"]`,
          `[name="robots"]`,
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: `GTM-WMKKBFD`,
    //     includeInDevelopment: true,
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     icon: `static/gaiama_pictogram.png`,
    //     localize: [
    //       {
    //         name: `GatsbyJS`,
    //         short_name: `Gatsby`,
    //         display: `standalone`,
    //         start_url: `/en/`,
    //         background_color: `#663399`,
    //         lang: `en`,
    //         theme_color: `#a2466c`,
    //       },
    //       {
    //         name: `GatsbyJS Deutschland`,
    //         short_name: `Gatsby DE`,
    //         display: `standalone`,
    //         start_url: `/de/`,
    //         lang: `de`,
    //         background_color: `#f7f0eb`,
    //         theme_color: `#a2466c`,
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          ...(!isProduction ? [`X-Robots-Tag: noindex, nofollow`] : []),
        ],
        // transformHeaders: (headers, path) => {
        //   console.log(JSON.stringify({ path, headers }, null, 2))
        //   return headers
        // },
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        root: resolve(`./`),
        src: resolve(`./src`),
        components: resolve(`./src/components`),
      },
    },
    `gatsby-plugin-netlify-cache`,
    // If this should ever be removed, replace it with `gatsby-plugin-remove-serviceworker`
    // as explained in https://www.gatsbyjs.org/packages/gatsby-plugin-offline/#remove
    `gatsby-plugin-offline`,
  ],
}
