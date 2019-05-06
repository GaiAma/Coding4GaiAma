const { homepage, version, repository } = require(`../../package.json`)

const {
  URL: NETLIFY_SITE_URL = homepage,
  DEPLOY_PRIME_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = process.env.NODE_ENV,
  BRANCH,
} = process.env
const branch = BRANCH || `dev`
const isNetlifyProduction =
  NETLIFY_ENV === `production` || `${branch}`.startsWith(`ab_`)
const siteUrl = isNetlifyProduction
  ? NETLIFY_SITE_URL
  : DEPLOY_PRIME_URL || homepage
const isDebug = /^(gatsby)?\*/i.test(`${process.env.DEBUG}`)

module.exports = {
  BRANCH,
  branch,
  DEPLOY_PRIME_URL,
  isDebug,
  isNetlifyProduction,
  NETLIFY_ENV,
  NETLIFY_SITE_URL,
  siteUrl,
}
