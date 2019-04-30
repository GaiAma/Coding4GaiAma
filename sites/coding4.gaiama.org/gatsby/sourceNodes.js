/**
 * Force `slug` to String so we don't have to quote e.g. 404
 */
module.exports = function sourceNodes({ actions }) {
  const { createTypes } = actions
  const typeDefs = `
    type MdxFrontmatter {
      slug: String
    }
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
  `
  createTypes(typeDefs)
}
