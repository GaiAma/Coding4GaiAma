import React from 'react'
import { css } from '@emotion/core'
import { withTheme } from 'gatsby-theme-context'

const Box = ({ theme, setTheme }) => {
  return (
    <div
      css={css`
        background: ${theme.background};
      `}
    >
      custom box
    </div>
  )
}

export default withTheme(Box)
