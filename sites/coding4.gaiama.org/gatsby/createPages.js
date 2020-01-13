const { resolve } = require(`path`)
const {
  branch,
  isProduction,
  siteUrl,
  isDebug,
} = require(`../src/utils/environment-helpers.js`)

module.exports = async function createPages({ graphql, actions }) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            layout
            type
            isPublished
          }
          fields {
            url
            lang
            slug
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(node => {
    const { layout, isPublished, type } = node.frontmatter
    const { lang, url, slug } = node.fields

    // no layout? not a page
    // isProduction && draft? don't create page!
    if (!layout || (isProduction && !isPublished)) {
      return
    }

    // publishedList based on draftBlacklist by https://github.com/gatsbyjs/gatsby/issues/12460#issuecomment-471376629
    const publishedList = isProduction ? [true] : [true, false]

    const page = {
      path: url,
      component: resolve(`./src/templates/${layout}.js`),
      // customizable layout
      // layout: resolve(`./src/templates/${layout}.js`),
      context: {
        url,
        lang,
        publishedList,
      },
    }

    // FIXME: implement proper 404, on gaiama.org they just flickr briefly then turn blank - WSOD aka white screen of death
    // localized and root error pages
    // if (type === `error`) {
    //   // page.statusCode = node.frontmatter.statusCode
    //   if (lang === `en`) {
    //     createPage({
    //       ...page,
    //       path: slug,
    //       matchPath: `/*`,
    //     })
    //   }
    //   page.matchPath = `/${lang}/*`
    // }

    createPage(page)
  })
}
