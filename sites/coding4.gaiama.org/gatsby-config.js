/**
 * TODO: check out webmentions
 * https://www.npmjs.com/package/gatsby-plugin-webmention
 * https://webmention.io/
 * https://brid.gy/
 */
const { resolve } = require(`path`)
const { round } = require(`lodash`)
const { homepage, version, repository } = require(`./package.json`)

const {
  URL: NETLIFY_SITE_URL = homepage,
  DEPLOY_PRIME_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = process.env.NODE_ENV,
  BRANCH,
} = process.env
const branch = BRANCH || `dev`
const isNetlifyProduction =
  NETLIFY_ENV === `production` || `${branch}`.startsWith(`ab_`)
const siteUrl = isNetlifyProduction
  ? NETLIFY_SITE_URL
  : DEPLOY_PRIME_URL || homepage
const isDebug = /^(gatsby)?\*/i.test(`${process.env.DEBUG}`)

module.exports = {
  siteMetadata: {
    title: `Coding4GaiAma`,
    author: `GaiAma.org`,
    description: `Behind the coding scenes of GaiAma.org`,
    siteUrl,
    version,
    branch,
    repository: `${repository.url}`.replace(/\.git$/, ``),
  },
  plugins: [
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: __dirname,
        name: `roadmap`,
        ignore: [
          // TODO: write about those chokidar matchers
          // `**/node_modules/*(.)**`,
          // `**/.cache/*(.)**`,
          // `**/public/**`,
          // `**/static/**`,
          // `**/*(.)*.{jpg,jpeg,png,gif,ico,json,map,gz,pdf}`,
          // string => string.includes(`/.cache/`),
          /\.*.*\/(node_modules|\.cache|public|static|dist)\/./,
          /\.*.\.(jpe?g|png|gif|ico|json|map|gz|pdf)/,
        ],
      },
    },
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
    {
      resolve: `gatsby-transformer-leasot`,
      options: {
        sourceInstanceName: `roadmap`,
        customTags: [`NOTE`],
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        // TODO: get the header slugs going
        // rehypePlugins: [require(`rehype-slug`)],
        gatsbyRemarkPlugins: [
          {
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
          // { resolve: `@gaiama/gatsby-remark-wrap-images` },
          { resolve: `gatsby-remark-copy-linked-files` },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`,
            },
          },
          { resolve: `gatsby-remark-external-links` },
          {
            // TODO: add react-live https://react-live.kitten.sh/ ?
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `+`,
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: true,
            },
          },
          `gatsby-remark-gemoji-to-emoji`,
          // TODO: gatsby-remark-abbr not working?
          // maybe make mdx plugin
          `gatsby-remark-abbr`,
          `gatsby-remark-a11y-emoji`,
        ],
      },
    },
    // {
    //   resolve: `gatsby-theme-context`,
    //   options: {
    //     themes,
    //     defaultTheme: `dark`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-emotion`,
    //   options: {
    //     labelFormat: `[filename]--[local]`,
    //   },
    // },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: isNetlifyProduction,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
        postCssPlugins: [
          // require(`postcss-import`)({
          //   path: [resolve(__dirname, `..`, `..`), resolve(__dirname)],
          // }),
          require(`tailwindcss`),
          require(`postcss-preset-env`)({ stage: 0 }),
        ],
      },
    },
    {
      // https://github.com/anantoghosh/gatsby-plugin-purgecss#whitelist-solutions
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: isDebug,
        printAll: isDebug,
        tailwind: true,
        whitelist: [`dark`, `light`],
      },
    },
    {
      resolve: `gatsby-plugin-react-head`,
      options: {
        whitelist: `html,title,[name="description"],[name="apple-mobile-web-app-title"],[name="application-name"],[property^="og:"],[property^="fb:"],[property^="twitter:"],[rel="alternate"],[property="^article:"],[name="robots"]`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-WMKKBFD`,
        includeInDevelopment: true,
      },
    },
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
          ...(!isNetlifyProduction ? [`X-Robots-Tag: noindex, nofollow`] : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@root': resolve(`./`),
        '@src': resolve(`./src`),
        '@components': resolve(`./src/components`),
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-offline`,
  ],
}
