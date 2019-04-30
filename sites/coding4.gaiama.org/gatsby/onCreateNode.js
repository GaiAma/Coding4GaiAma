const slugify = require('@sindresorhus/slugify')

exports.onCreateNode = ({ homepage }) => async ({
  node,
  actions,
  getNode,
  reporter,
}) => {
  if (typeof node.frontmatter === `undefined`) return

  const { createNodeField, createRedirect } = actions

  const fileNode = getNode(node.parent)

  const addField = (name, value) =>
    createNodeField({
      node,
      name,
      value,
    })

  /**
   * find the lang in the following order
   * 1. frontmatter
   * 2. file name lang e.g. index.en.mdx
   * 3. file name e.g. en.mdx
   * deprecated: 3. relativeDirectory (probably not so valid anymore)
   */
  const fileNameLang = fileNode.name.split(`.`)[1]
  const lang = node.frontmatter.lang || fileNameLang || fileNode.name
  // fileNode.relativeDirectory.split(`/`)[0]
  const date = node.frontmatter.date || fileNode.birthtime

  addField(`relativePath`, node.relativePath)
  addField(`lang`, lang)
  addField(`date`, date)

  if (!node.frontmatter.layout) {
    if (/^authors/.test(node.relativeDirectoy)) {
      addField(`type`, `author`)
      addField(`author`, node.relativeDirectoy.split(`/`).slice(-1))
    }

    return
  }

  /**
   * Post related fields
   */
  const slug = slugify(`${node.frontmatter.slug || fileNode.name}`)
  const url = lang ? `/${lang}/${slug}` : `/${slug}`

  // addField(`type`, isPost(node) ? `post` : `page`)
  addField(`slug`, slug)
  addField(`url`, url)
  addField(`absoluteUrl`, `${homepage}${url}`)

  // https://www.gatsbyjs.org/docs/actions/#createRedirect
  // createRedirect({
  //   isPermanent: true,
  //   fromPath: '/url',
  //   toPath: '/zn-CH/url',
  //   Language: 'zn',
  // })

  if (!node.frontmatter.summary) {
    reporter.info(`summary missing for ${url}`)
  }
}
