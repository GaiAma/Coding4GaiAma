import React from 'react'
import Img from 'gatsby-image'

export default props => {
  let normalizedProps = !props?.fluid?.presentationWidth
    ? props
    : {
        ...props,
        style: {
          ...(props.style || {}),
          maxWidth: props.fluid.presentationWidth,
          // margin: '0 auto', // Used to center the image
        },
      }

  return <Img {...normalizedProps} />
}
