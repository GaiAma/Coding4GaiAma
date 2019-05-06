const { resolve } = require(`path`)
const {
  branch,
  isNetlifyProduction,
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
    // no layout? not a page
    // isProduction && draft? don't create page!
    if (
      !node.frontmatter.layout ||
      (isNetlifyProduction && node.frontmatter.draft)
    ) {
      return
    }

    const page = {
      path: node.fields.url,
      component: resolve(`./src/templates/${node.frontmatter.layout}.js`),
      // customizable layout
      // layout: resolve(`./src/templates/${node.frontmatter.layout}.js`),
      context: {
        url: node.fields.url,
        lang: node.fields.lang,
        // draftBlacklist by https://github.com/gatsbyjs/gatsby/issues/12460#issuecomment-471376629
        draftBlacklist: isNetlifyProduction ? [true] : [],
      },
    }

    // localized and root error pages
    if (node.frontmatter.type === `error`) {
      if (node.fields.lang === `en`) {
        createPage({
          ...page,
          path: `/${node.fields.slug}`,
          matchPath: `/*`,
        })
      }
      page.matchPath = `/${node.fields.lang}/*`
    }

    createPage(page)
  })
}
