/* global window */
import preval from 'babel-plugin-preval/macro'
const { version, bugs, branch } = preval`
  const { version, bugs } = require('./package.json')
  const branch = process.env.BRANCH || 'dev'
  module.exports = { version, bugs, branch }
`

// TODO: maybe improve on it – but what 😅
// sadly don't remember what I was thinking
// https://github.com/gatsbyjs/gatsby/pull/11379/files
// window.dataLayer = window.dataLayer || []
// window.dataLayer.push({
//   GAIAMA_BRANCH: branch,
// })

try {
  window.GaiAma = {
    ...window.GaiAma,
    branch,
    version,
    bugTracker: bugs,
  }
  console.log(
    `%cWelcome to Coding4.GaiAma.org version ${version}, you're on the ${branch} branch`,
    `font-size:13px;color:#01422e;`
  )
  console.log(
    `%cFeel free to inspect everything, e.g. 'window.GaiAma'`,
    `color:green;`
  )
  console.log(
    `%cYou'll find the MIT licensed source code of the website at ${bugs.url.replace(
      `/issues`,
      ``
    )}`,
    `color:green;`
  )
  console.log(
    `%cIf you encounter anything unexpected, or have other feedback feel free to file an issue at ${bugs.url}/new?labels=ViaDevTools`,
    `color:#3a9a02;`
  )
  /* eslint-disable-next-line */
} catch (e) {}
