/* global document, window */
import preval from 'babel-plugin-preval/macro'
const { version, bugs, branch, repoUrl, newIssueUrl } = preval`
  const { version, bugs } = require('./package.json')
  const branch = process.env.BRANCH || 'dev'
  const repoUrl = bugs.url.replace('/issues', '')
  const newIssueUrl = bugs.url + '/new'
  module.exports = { version, bugs, branch, repoUrl, newIssueUrl }
`

// from https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/gatsby/node/createPages.js#L5
// const log = (message, section) => console.log(`\n\u001B[36m${message} \u001B[4m${section}\u001B[0m\u001B[0m\n`)

// TODO: maybe improve on it – but what 😅
// sadly don't remember what I was thinking
// https://github.com/gatsbyjs/gatsby/pull/11379/files
// window.dataLayer = window.dataLayer || []
// window.dataLayer.push({
//   GAIAMA_BRANCH: branch,
// })

const scrollTo = id => () => {
  const el = document.querySelector(id)
  if (el) {
    // return window.scrollTo(0, el.offsetTop - 20)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return false
}

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(scrollTo(hash), 10)
  }
}

try {
  window.GaiAma = {
    ...window.GaiAma,
    branch,
    version,
    bugTracker: bugs,
  }
  window.C4G = window.GaiAma
  // TODO: use [figlet](https://www.npmjs.com/package/figlet) & turn it into a gatsby-plugin?
  console.info(
    `ƛ\n`,
    `Welcome to Coding4.GaiAma.org version ${version}, you're on the ${branch} branch`,
    `\n`,
    `\n`,
    `
 ######   #######  ########  #### ##    ##  ######   ##         ######      ###    ####    ###    ##     ##    ###
##    ## ##     ## ##     ##  ##  ###   ## ##    ##  ##    ##  ##    ##    ## ##    ##    ## ##   ###   ###   ## ##
##       ##     ## ##     ##  ##  ####  ## ##        ##    ##  ##         ##   ##   ##   ##   ##  #### ####  ##   ##
##       ##     ## ##     ##  ##  ## ## ## ##   #### ##    ##  ##   #### ##     ##  ##  ##     ## ## ### ## ##     ##
##       ##     ## ##     ##  ##  ##  #### ##    ##  ######### ##    ##  #########  ##  ######### ##     ## #########
##    ## ##     ## ##     ##  ##  ##   ### ##    ##        ##  ##    ##  ##     ##  ##  ##     ## ##     ## ##     ##
 ######   #######  ########  #### ##    ##  ######         ##   ######   ##     ## #### ##     ## ##     ## ##     ##
    `,
    `\n`,
    `\n`,
    `Feel free to inspect everything, e.g. 'window.C4G' / 'window.GaiAma'`,
    `\n`,
    `\n`,
    `You'll find the MIT licensed source code of the website at ${repoUrl}`,
    `\n`,
    `\n`,
    `If you encounter anything unexpected, or have other feedback feel free to file an issue at ${newIssueUrl}`,
    `\nƛ`
  )
} catch (e) {
  console.info(
    `Have you found a bug? Please help me fix it by submitting it to ${newIssueUrl}`
  )
}
