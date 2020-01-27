const get = require(`lodash/get`)

const splitProxyString = str =>
  str.split('.').reduceRight((acc, chunk) => {
    return { [chunk]: acc }
  }, true)

/**
 * based on
 *  Advanced GraphQL Techniques in Gatsby (with Mikhail Novikov) — Learn With Jason
 *  https://www.youtube.com/watch?v=ALspNtrOqDk
 *  https://github.com/jlengstorf/gatsby-advanced-graphql
 *
 * related reads
 *  https://github.com/gatsbyjs/gatsby/issues/12272
 *  https://www.gatsbyjs.org/blog/2019-05-17-improvements-to-schema-customization/#reach-skip-nav
 *  https://www.gatsbyjs.org/docs/schema-customization/
 *  https://spectrum.chat/gatsby-js/general/schema-customization-question~aa89299f-fdf1-432c-b54a-3f431986ae41
 *  https://github.com/gatsbyjs/gatsby/issues/20162 // Not clear how to display markdown that is not coming from a file
 *
 * examples
 *  https://github.com/NickyMeuleman/gatsby-theme-nicky-blog/blob/master/theme/gatsby-node.js
 */

module.exports = ({ actions }) => {
  const typeDefs = `
    type Mdx implements Node @infer {
      toc: JSON
      frontmatter: Frontmatter
    }
    
    type Frontmatter @infer {
      showTableOfContents: Boolean
      dateModified: Date
    }
  `

  actions.createTypes(typeDefs)
}

// module.exports = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type MdxFrontmatter {
//       showTableOfContents: Boolean
//     }
//   `
//   createTypes(typeDefs)
// }
