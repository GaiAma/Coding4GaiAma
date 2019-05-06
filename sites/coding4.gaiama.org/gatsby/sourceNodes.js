/**
 * Add types and resolvers
 */
module.exports = function sourceNodes({ actions, schema }) {
  const { createTypes } = actions

  createTypes([
    /**
     * MdxFrontmatter
     * Ensure frontmatter.slug is a string
     */
    schema.buildObjectType({
      name: `MdxFrontmatter`,
      fields: {
        draft: `Boolean`,
        slug: `String`,
        shortUrl: `String`,
      },
    }),

    /**
     * Add types and resolvers to Mdx
     */
    schema.buildObjectType({
      name: `Mdx`,
      fields: {
        // set frontmatter to above declared MdxFrontmatter types
        frontmatter: `MdxFrontmatter!`,

        // add Author
        author: {
          type: `Mdx`,
          async resolve(source, _args, { nodeModel }) {
            const author = source.frontmatter.author.toLowerCase()
            const lang = source.fields.lang
            const result = await nodeModel.runQuery({
              query: {
                filter: {
                  frontmatter: {
                    slug: { eq: author },
                  },
                  fields: {
                    lang: { eq: lang },
                  },
                },
              },
              type: `Mdx`,
              firstOnly: true,
            })
            return result
          },
        },
      },
      interfaces: [`Node`],
    }),
  ])
}
