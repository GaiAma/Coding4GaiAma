const speakingurl = require(`speakingurl`)
const { homepage, repository } = require(`../package.json`)

const isHomePage = node => node.frontmatter.layout === `HomePage`

module.exports = async function onCreateNode({
  node,
  actions,
  getNode,
  reporter,
}) {
  if (typeof node.frontmatter === `undefined`) return

  const { createNodeField, createRedirect, deleteNode } = actions

  // remove draft nodes
  // not working at the moment
  // https://github.com/gatsbyjs/gatsby/issues/10844
  // if (node.frontmatter.draft) deleteNode(node)

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

  const slugify = s => speakingurl(s, { lang })

  /**
   * Post related fields
   */
  const { slug, title, shortSlug } = node.frontmatter
  const sluggified = `/${slugify(`${slug || title || fileNode.name}`)}`
  const sluggifiedShort = shortSlug ? `/${slugify(`${shortSlug}`)}` : sluggified
  const url = lang ? `/${lang}${sluggified}` : sluggified

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

  if (!node.frontmatter.description) {
    reporter.info(`description missing for ${url}`)
  }
}
