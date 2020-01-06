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
    `Feel free to inspect everything, e.g. 'window.GaiAma'`,
    `\n`,
    `\n`,
    `You'll find the MIT licensed source code of the website at ${bugs.url.replace(
      `/issues`,
      ``
    )}`,
    `\n`,
    `\n`,
    `If you encounter anything unexpected, or have other feedback feel free to file an issue at ${bugs.url}/new?labels=ViaDevTools`,
    `\nƛ`
  )
  /* eslint-disable-next-line */
} catch (e) {}
