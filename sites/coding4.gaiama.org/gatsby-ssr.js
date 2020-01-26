const { createElement } = require('react')
const { version, bugs } = require('./package.json')
const { branch, newIssueUrl } = require('./src/utils/environment-helpers.js')
const { minify } = require('terser')

exports.onRenderBody = ({ setHeadComponents }) => {
  const result = minify(`
    window.GaiAma = {
      branch: '${branch}',
      version: '${version}',
      bugTracker: '${bugs.url}',
      newIssueUrl: '${newIssueUrl}',
      perf: {},
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
