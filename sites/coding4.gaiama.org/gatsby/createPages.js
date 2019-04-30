const { resolve } = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
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
    if (!node.frontmatter.layout) {
      return
    }

    const page = {
      path: node.fields.url,
      component: resolve(`./src/templates/${node.frontmatter.layout}.js`),
      context: {
        url: node.fields.url,
      },
    }

    // localized and root error pages
    if (node.frontmatter.type === `error`) {
      if (node.fields.lang === `en`) {
        createPage({
          ...page,
          path: `/${node.fields.slug}`,
        })
      }
      page.matchPath = `/${node.fields.lang}/*`
    }

    createPage(page)
  })
}
