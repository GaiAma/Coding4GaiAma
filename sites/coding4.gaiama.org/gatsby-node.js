const { homepage } = require(`./package.json`)

try {
  const { onCreateNode } = require(`./gatsby/onCreateNode`)
  const { createPages } = require(`./gatsby/createPages`)
  const { sourceNodes } = require(`./gatsby/sourceNodes`)
  const { createResolvers } = require(`./gatsby/createResolvers`)
  exports.onCreateNode = onCreateNode({ homepage })
  exports.createPages = createPages
  exports.sourceNodes = sourceNodes
  exports.createResolvers = createResolvers
} catch (error) {
  console.log(`ERROR:GATSBY-NODE`)
  console.log(error)
}
