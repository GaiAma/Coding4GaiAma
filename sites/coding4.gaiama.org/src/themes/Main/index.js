import React, { Fragment } from 'react'
// import tw from 'tailwind.macro'
// import preval from 'babel-plugin-preval/macro'
import { withTheme } from 'gatsby-theme-context'

// // import normalize from 'modern-normalize'
// import 'normalize.css'
import 'typeface-cormorant-garamond'
import 'typeface-proza-libre'
import './test.css'

// const bg = preval`
//   const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 4 24"><line x1="0" x2="4" y1="24" y2="24" stroke="rgba(0,0,0,.8)"/></svg>'
//   module.exports = Buffer.from(svg).toString('base64')
// `

const _MainLayout = ({ children, theme, setTheme, ...props }) => (
  <Fragment>
    <div>{children}</div>

    <div className="absolute top-0 right-0 pt-2 pr-2">
      <button onClick={() => setTheme(`light`)}>Light</button>
      <button onClick={() => setTheme(`dark`)}>Dark</button>
    </div>
  </Fragment>
)

export const MainLayout = withTheme(_MainLayout)
