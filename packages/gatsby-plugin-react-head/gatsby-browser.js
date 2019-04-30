const React = require(`react`)
const { HeadProvider } = require(`react-head`)

module.exports.wrapRootElement = ({ element }, options) => {
  return <HeadProvider {...options}>{element}</HeadProvider>
}
