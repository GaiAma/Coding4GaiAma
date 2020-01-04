/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Heading as UiHeading } from '@theme-ui/components'

export const Heading = props => (
  <UiHeading
    {...props}
    sx={{
      ':target': { border: '1px solid', borderColor: 'text' },
      ':hover a': { opacity: 1 },
      a: {
        position: `absolute`,
        ml: `-1em`,
        opacity: 0,
        '@media (hover: none)': {
          opacity: 1,
        },
        pr: `0.5rem`,
        svg: {
          fill: `text`,
        },
      },
    }}
  >
    <a href={`#${props.id}`} sx={{ color: `muted`, textDecoration: `none` }}>
      #
    </a>
    {props.children}
  </UiHeading>
)
