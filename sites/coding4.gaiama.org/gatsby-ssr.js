const { createElement } = require('react')
const { version, bugs, dependencies } = require('./package.json')
const { branch, newIssueUrl } = require('./src/utils/environment-helpers.js')
const { minify } = require('terser')
const { gatsby, react, preact, 'theme-ui': themeUI } = dependencies

exports.onRenderBody = ({ setHeadComponents }) => {
  const result = minify(`
    window.GaiAma = {
      branch: '${branch}',
      version: '${version}',
      bugTracker: '${bugs.url}',
      newIssueUrl: '${newIssueUrl}',
      perf: {},
      dependencies: {
        gatsby: '${gatsby}',
        'theme-ui': '${themeUI}',
        react: '${react}',
        preact: '${preact}',
      },
    }
  `)

  setHeadComponents([
    createElement('script', {
      key: 'window.GaiAma',
      dangerouslySetInnerHTML: {
        __html: result.code,
      },
    }),
  ])
}
