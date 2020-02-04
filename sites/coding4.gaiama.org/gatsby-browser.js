/* global document, window */
import preval from 'babel-plugin-preval/macro'
const { version, branch, repository, newIssueUrl } = preval`
  const { version, bugs } = require('./package.json')
  const { branch, isProduction, siteUrl, repository, newIssueUrl } = require('./src/utils/environment-helpers.js')
  module.exports = { version, bugs, branch, repository, newIssueUrl }
`
const doc = document
const win = window

// by https://stackoverflow.com/a/27779534/3484824
// read https://developer.akamai.com/blog/2017/12/04/beware-performancetimingdominteractive
// watch https://www.oreilly.com/ideas/measuring-what-matters
// https://blog.logrocket.com/how-to-practically-use-performance-api-to-measure-performance/
// https://github.com/NoriSte/gatsby-plugin-perfume.js
// https://github.com/hupe1980/gatsby-plugin-performance-metrics
doc.addEventListener('readystatechange', () => {
  win.GaiAma.perf[doc.readyState] = `${performance.now().toFixed(2)}ms`
})
doc.addEventListener(
  'DOMContentLoaded',
  () => {
    win.GaiAma.perf.DOMContentLoaded = `${performance.now().toFixed(2)}ms`
  },
  false
)
win.addEventListener(
  'load',
  () => {
    win.GaiAma.perf.load = `${performance.now().toFixed(2)}ms`
  },
  false
)

// https://stackoverflow.com/a/55803507/3484824
// markers https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure
// http://qnimate.com/measuring-web-page-performance-using-modern-javascript-apis/
// https://techblog.constantcontact.com/software-development/measure-page-load-times-using-the-user-timing-api/

const perf =
  win.performance ||
  win.mozPerformance ||
  win.msPerformance ||
  win.webkitPerformance ||
  {}

perf.measure('navigationLoadTime')
perf
  .getEntriesByType('measure')
  .map(x => (win.GaiAma.perf[x.name] = `${x.duration.toFixed(2)}ms`))
perf.clearMarks()
perf.clearMeasures()

win.onload = win.setTimeout(() => {
  const t = perf.timing
  if (!t) return
  win.GaiAma.perf.pageLoadTime = `${t.domContentLoadedEventEnd -
    t.navigationStart}ms`
})

// from https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/gatsby/node/createPages.js#L5
const log = msg => console.log(`\n\u001B[36m${msg}\u001B[0m\u001B[0m\n`)

// win.dataLayer.push({
//   GAIAMA_BRANCH: branch,
// })

const scrollTo = id => () => {
  const el = doc.querySelector(id)
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const onRouteUpdate = ({ location: { hash } }) => {
  if (!hash) return false
  win.setTimeout(scrollTo(hash), 10)
}

try {
  win.C4G = win.GaiAma
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
    `You'll find the MIT licensed source code of the website at ${repository.url}`,
    `\n`,
    `\n`,
    `If you encounter anything unexpected, or have other feedback feel free to file an issue at ${newIssueUrl}`,
    `\nƛ`
  )
} catch (e) {
  log(
    `Have you found a bug? Please help me fix it by submitting it to ${newIssueUrl}`
  )
}
