// const { GraphQLInt } = require(`gatsby/graphql`)
// TODO: author resolver not working
module.exports = function createResolvers({ createResolvers }) {
  createResolvers({
    Mdx: {
      author: {
        type: `Mdx`,
        // args: {
        //   count: GraphQLInt,
        // },
        resolve(source, _args, { nodeModel }) {
          const author = source.frontmatter.author.toLowerCase()
          const lang = source.fields.lang
          return nodeModel.runQuery({
            query: {
              filter: {
                fields: { author: { eq: author }, lang: { eq: lang } },
              },
            },
            type: `Mdx`,
            firstOnly: true,
          })
        },
      },
    },
  })
}
