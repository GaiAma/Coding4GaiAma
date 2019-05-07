const { join } = require(`path`)
const { writeFile } = require(`fs`).promises
const serveJson = require(`../serve.json`)

module.exports = async function onPostBuild({ store, reporter }) {
  reporter.info(`generating serve.json`)
  const { redirects } = store.getState()

  serveJson.redirects = serveJson.redirects.concat(
    redirects.map(x => ({ source: x.fromPath, destination: x.toPath }))
  )

  await writeFile(
    join(__dirname, `..`, `public`, `serve.json`),
    JSON.stringify(serveJson, null, 2)
  )
  reporter.info(`successfully created serve.json`)
}
