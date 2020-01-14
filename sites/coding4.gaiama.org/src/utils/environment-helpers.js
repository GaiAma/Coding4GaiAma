const { homepage, repository, bugs } = require(`../../package.json`)

const {
  URL: NETLIFY_SITE_URL = homepage,
  DEPLOY_PRIME_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = process.env.NODE_ENV,
  BRANCH,
  GITHUB_REF,
  DEBUG,
} = process.env

const branch = BRANCH || GITHUB_REF || `dev`
const isProduction =
  NETLIFY_ENV === `production` || `${branch}`.startsWith(`ab_`)
const isDebug = /^(gatsby)?\*/i.test(`${DEBUG}`)
const siteUrl = isProduction ? NETLIFY_SITE_URL : DEPLOY_PRIME_URL

module.exports = {
  branch,
  isDebug,
  isProduction,
  siteUrl,
  repository: {
    url: `${repository.url}`.replace(/\.git$/, ``),
    directory: repository.directory,
  },
  newIssueUrl: bugs.url + '/new',
}
