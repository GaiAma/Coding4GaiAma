import React from 'react'
import Img from 'gatsby-image'

export default props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        // margin: '0 auto', // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}
