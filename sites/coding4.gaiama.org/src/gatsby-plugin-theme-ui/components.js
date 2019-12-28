/** @jsx jsx */
import { jsx } from 'theme-ui'
import { CodeBlock } from 'components/CodeBlock'
import { Link } from 'components/Link'
import { Heading, Box } from '@theme-ui/components'

// const blockquote = props => (
//   <blockquote
//     sx={{
//       gridColumn: `4/7`,
//       width: `100%`,
//       maxWidth: `100%`,
//       paddingLeft: `10px`,
//     }}
//     {...props}
//   />
// )

// const Title = props => (
//   <Heading
//     sx={
//       {
//         // gridColumn: `4/7`,
//         // width: `100%`,
//         // maxWidth: `100%`,
//         // paddingLeft: `10px`,
//         // color: `red`,
//       }
//     }
//     {...props}
//   />
// )

// const Paragraph = props => <Text as="p" mb="4" {...props} />

const heading = tag => props => {
  return (
    <Heading
      as={tag}
      {...props}
      sx={{
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
    </Heading>
  )
}

export default {
  // blockquote,
  pre: props => <div {...props} sx={{ variant: `grid.contentL`, mb: 7 }} />,
  code: props => <CodeBlock {...props} />,
  // h1: props => <Title as="h1" {...props} />,
  // h2: props => <Title as="h2" {...props} />,
  // h3: props => <Title as="h3" {...props} />,
  // h4: props => <Title as="h4" {...props} />,
  // h5: props => <Title as="h5" {...props} />,
  // h6: props => <Title as="h6" {...props} />,
  // p: Paragraph,
  a: Link,
  Link,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  Box,
}
