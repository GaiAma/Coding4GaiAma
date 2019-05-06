// const { GraphQLString } = require(`gatsby/graphql`)
const { upperFirst } = require(`lodash`)
// const { addIndex, compose, keys, groupBy, path, reduce } = require(`ramda`)
const leasot = require(`leasot`)
const Autolinker = require(`autolinker`)
const { name: pluginName } = require(`./package.json`)

const autolinker = new Autolinker({
  truncate: { length: 32, location: 'smart' },
})

let emptyStateCreated = false

/**
 * custom resolver used to filter out emptyState, which we can't delete for now
 */
// exports.createResolvers = ({ createResolvers }, { sourceInstanceName }) => {
//   const nodeType = upperFirst(sourceInstanceName)
//   const typeUnfiltered = `${nodeType}Unfiltered`
//   const resolvers = {
//     Query: {
//       [`all${nodeType}`]: {
//         type: [typeUnfiltered],
//         args: {
//           type: GraphQLString,
//           group: GraphQLString,
//         },
//         resolve: (_, { group, type }, { nodeModel }) => {
//           const todos = nodeModel.getAllNodes({ type: typeUnfiltered })
//           // get all todos, filtered by optional type, drop isEmptyState
//           // const matchesGroup = n => new RegExp(group, `i`).test(n.todo.tag)
//           const groupPath = path([`todo`, group])
//           const reducer = a =>
//             keys(a).reduce((acc, fieldValue) => [
//               ...acc,
//               { fieldValue, items: a[fieldValue] },
//             ])
//           const groupByTag = groupBy(groupPath)

//           const isEmptyState = t => t.todo.isEmptyState
//           const matchesTag = t => new RegExp(type, `i`).test(t.todo.tag)
//           const filter = t => (!isEmptyState(t) && type ? matchesTag(t) : true)

//           const filtered = todos.filter(filter)
//           return group ? reducer(groupByTag(filtered)) : filtered
//         },
//       },
//     },
//   }
//   createResolvers(resolvers)
// }

exports.onCreateNode = async (
  {
    node,
    loadNodeContent,
    createNodeId,
    getNode,
    // getNodesByType,
    createContentDigest,
    reporter,
    actions: { createNode, createParentChildLink /*, deleteNode*/ },
  },
  {
    sourceInstanceName,
    customTags = [],
    customParsers = {},
    associateParser = {},
    emptyState: customizedEmptyState = {},
  }
) => {
  /**
   * we only care about File nodes with our sourceInstanceName
   */
  if (
    node.sourceInstanceName !== sourceInstanceName ||
    node.internal.type !== `File`
  ) {
    return
  }
  // const nodeType = `${upperFirst(sourceInstanceName)}Unfiltered`
  const nodeType = `${upperFirst(sourceInstanceName)}`

  /**
   * helper to create the node object, create the node and link to parent
   */
  // eslint-disable-next-line
  const makeNode = todo => {
    const id = createNodeId(
      `${node.id} >>> ${todo.file}#${todo.line} >>> Leasot`
    )
    if (getNode(id)) return
    const leasotNode = {
      todo: {
        ...todo,
        text: autolinker.link(todo.text),
        modifiedTime: node.modifiedTime,
      },
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(todo),
        type: nodeType,
      },
    }
    createNode(leasotNode)
    createParentChildLink({ parent: node, child: leasotNode })
  }

  try {
    const content = await loadNodeContent(node)

    /**
     * parse node content for todo, fixme & customTags
     */
    const todos = leasot.parse(content, {
      extension: node.ext,
      filename: node.base,
      withInlineFiles: true,
      customTags,
      customParsers,
      associateParser: {
        '.md': { parserName: 'twigParser', includedFiles: [`.yml`] },
        '.mdx': { parserName: 'twigParser', includedFiles: [`.yml`] },
        ...associateParser,
      },
    })

    /**
     * create emptyState if no not already created and no todos
     */
    if (!todos.length && customizedEmptyState !== null) {
      if (emptyStateCreated) {
        // const todoNodes = getNodesByType(nodeType)
        // if (todoNodes.filter(n => !n.todo.isEmptyState).length) {
        //   const existingEmptyState = todoNodes.find(n => n.todo.isEmptyState)
        //   if (!existingEmptyState) return
        //   // delete emptyState if emptyState created and we find a real todo node
        //   // TODO: deleteNode not working, causes crash due to undefined node
        //   // https://github.com/gatsbyjs/gatsby/issues/10844
        //   // https://github.com/gatsbyjs/gatsby/issues/11172
        //   // https://github.com/gatsbyjs/gatsby/issues/9321
        //   deleteNode({ node: existingEmptyState })
        // }
        // nothing else to do here
        return
      }

      // merge default with customizedEmptyState
      const emptyState = Object.assign(
        {},
        {
          tag: `EmptyState`,
          line: 0,
          ref: `EmptyState`,
          text: `All done, nothing todo 🎉`,
          file: `${pluginName}/gatsby-node.js`,
        },
        customizedEmptyState
      )

      makeNode({ ...emptyState, isEmptyState: true })

      // don't create multiple empty states
      emptyStateCreated = true
      return
    }

    /**
     * iterate todos to store each in its own node
     * easier to query
     */
    return todos.map(makeNode)
  } catch (err) {
    reporter.panicOnBuild(
      `Error in ${pluginName}, processing ${sourceInstanceName} ${
        node.relativePath ? `file ${node.relativePath}` : `in node ${node.id}`
      }:\n
      ${err.message}`
    )
  }
}

/**
 * Add types and resolvers
 */
module.exports.sourceNodes = ({ actions, schema }, { sourceInstanceName }) => {
  const { createTypes } = actions
  const nodeName = upperFirst(sourceInstanceName)
  createTypes([
    /**
     * `${nodeName}Todo`
     * Ensure todo.file is a string
     */
    schema.buildObjectType({
      name: `${nodeName}Todo`,
      fields: {
        file: `File`,
      },
    }),

    /**
     * Add types and resolvers to Mdx
     */
    schema.buildObjectType({
      name: nodeName,
      fields: {
        // set todo to above declared ${nodeName}Todo types
        todo: `${nodeName}Todo!`,
      },
      interfaces: [`Node`],
    }),
  ])
}
