const React = require(`react`)
const { HeadProvider } = require(`react-head`)

const headTags = []

module.exports.wrapRootElement = ({ element }, options) => {
  return (
    <HeadProvider headTags={headTags} {...options}>
      {element}
    </HeadProvider>
  )
}

module.exports.onRenderBody = ({ setHeadComponents }) => {
  const headComponents = headTags.map(({ type: Type, props }) => (
    <Type key={JSON.stringify(props)} {...props} />
  ))
  setHeadComponents(headComponents)
}

module.exports.onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()
  headComponents.sort((a, b) => {
    if (a && a.type === `title`) {
      return -1
    } else if (b && b.type === `title`) {
      return 1
    }
    return 0
  })
  replaceHeadComponents(headComponents)
}
