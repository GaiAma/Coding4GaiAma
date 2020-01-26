const mdx = require(`@mdx-js/mdx`)
const visit = require(`unist-util-visit`)
const toString = require('mdast-util-to-string')
const speakingurl = require(`speakingurl`)
const grayMatter = require(`gray-matter`)
const { toc } = require(`table-of-contents`)

const generateToc = ({ lang }) => ast => {
  const headings = []

  visit(ast, `heading`, visitor)

  function visitor(child) {
    const title = toString(child)
    const slug = speakingurl(title, { lang })
    headings.push({
      depth: child.depth,
      title,
      url: `#${slug}`,
      children: [],
    })
  }

  return toc(headings)
}

/**
 * https://www.gatsbyjs.org/blog/2019-03-04-new-schema-customization/#createresolvers
 */
module.exports = function createResolvers({ createResolvers }) {
  const resolvers = {
    Mdx: {
      toc: {
        async resolve(node) {
          // FIXME: do we really need to compile the thing again? There should be a better solution!
          const { content } = grayMatter(node.rawBody)
          const compiler = mdx.createMdxAstCompiler({ remarkPlugins: [] })
          const mdast = compiler.parse(content)
          const result = generateToc({ lang: node.frontmatter.lang })(mdast)
          return result
        },
      },
    },
  }
  createResolvers(resolvers)
}
