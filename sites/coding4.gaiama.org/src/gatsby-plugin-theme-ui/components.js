/** @jsx jsx */
import { jsx } from 'theme-ui'
import { CodeBlock } from 'components/CodeBlock'
import { Link } from 'components/Link'

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

// const Paragraph = props => <Text as="p" mt="4" {...props} />

export default {
  // blockquote,
  pre: props => <div {...props} sx={{ variant: `grid.contentL`, mt: 4 }} />,
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
}
