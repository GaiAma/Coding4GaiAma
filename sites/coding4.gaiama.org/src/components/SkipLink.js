/** @jsx jsx */
import { jsx } from 'theme-ui'

/* eslint-disable jsx-a11y/anchor-has-content */
export default props => (
  <a
    href="#content"
    {...props}
    sx={{
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      m: -1,
      p: 0,
      overrflow: 'hidden',
      position: 'absolute',
      top: -9999,
      ':focus': {
        p: 3,
        position: 'fixed',
        zIndex: 4,
        top: 0,
        left: 0,
        m: 2,
        fontWeight: 'bold',
        color: 'background',
        bg: 'text',
        width: 'auto',
        height: 'auto',
        clip: 'auto',
      },
    }}
  />
)
