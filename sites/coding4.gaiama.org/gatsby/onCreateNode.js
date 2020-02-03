const { slugify } = require(`@gaiama/slugger`)
const { homepage, repository } = require(`../package.json`)

// const isHomePage = node => node.frontmatter.layout === `HomePage`

module.exports = async function onCreateNode({
  node,
  actions,
  getNode,
  reporter,
}) {
  if (typeof node.frontmatter === `undefined`) return

  const { createNodeField, createRedirect, deleteNode } = actions

  slugify.reset()

  // remove draft nodes
  // not working at the moment
  // https://github.com/gatsbyjs/gatsby/issues/10844
  // if (!node.frontmatter.isPublished) deleteNode(node)

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
  const editLink = repository.url.replace(
    /.git$/,
    `/blob/master/${repository.directory}/content/${fileNode.relativePath}`
  )

  addField(`relativePath`, node.relativePath)
  addField(`lang`, lang)
  addField(`date`, date)
  addField(`editLink`, editLink)

  if (!node.frontmatter.layout) {
    return
  }

  /**
   * Post related fields
   */
  const { slug, title, shortSlug } = node.frontmatter
  const sluggified = `/${slugify(slug || title || fileNode.name)}`
  const sluggifiedShort = shortSlug ? `/${slugify(shortSlug)}` : sluggified
  const url = lang ? `/${lang}${sluggified}` : sluggified

  // notify if description missing, bail if isPublished=true & NODE_ENV=production
  if (!node.frontmatter.description) {
    const reportType = node.frontmatter.isPublished ? `error` : `info`
    reporter[reportType](`description missing for ${url}`)
    if (reportType === `error` && process.env.NODE_ENV === `production`) {
      process.exit(1)
    }
  }

  addField(`slug`, sluggified)
  addField(`url`, url)
  const absoluteUrl = `${homepage}${url}`
  // const absoluteUrlShort = `${homepage}${sluggifiedShort}`
  addField(`absoluteUrl`, absoluteUrl)
  // addField(`shareableUrl`, sluggifiedShort || url)
  // addField(`shareableUrlAbsolute`, absoluteUrlShort || absoluteUrl)

  const redirects = []
    .concat(node.frontmatter.redirects)
    .concat(sluggifiedShort)
    .filter(Boolean)

  if (redirects.length) {
    // https://www.gatsbyjs.org/docs/actions/#createRedirect
    redirects.forEach(redirect => {
      createRedirect({
        isPermanent: true,
        fromPath: redirect,
        toPath: url,
        // TODO: when plugin/theme, change `en` to defaultLanguage from config
        ...(lang !== `en` ? { Language: lang } : {}),
      })
    })
  }
}
