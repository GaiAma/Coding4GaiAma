/** @jsx jsx */
import { jsx } from 'theme-ui'
import { CodeBlock } from 'components/CodeBlock'
import { Box } from '@theme-ui/components'
import { Link } from 'components/Link'
import { Heading } from 'components/Heading'

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

const gridSize = str => {
  const result = str ?? `grid.contentL`
  return !/^grid\./.test(result) ? `grid.${result}` : result
}

export default {
  // blockquote,
  pre: props => (
    <div
      {...props}
      sx={{ variant: gridSize(props.children?.props?.size), mb: 10 }}
    />
  ),
  code: props => <CodeBlock {...props} />,
  a: Link,
  Link,
  h1: props => <Heading {...props} as="h1" />,
  h2: props => <Heading {...props} as="h2" />,
  h3: props => <Heading {...props} as="h3" />,
  h4: props => <Heading {...props} as="h4" />,
  h5: props => <Heading {...props} as="h5" />,
  h6: props => <Heading {...props} as="h6" />,
  Box: props => <Box mb="10" {...props} />,
  table: ({ headers = [], ...props }) => (
    <table
      {...props}
      sx={{
        ...(headers?.length && {
          '@media only screen and (max-width: 900px)': headers.reduce(
            (result, each, index) => ({
              ...result,
              [`td:nth-of-type(${index + 1}):before`]: { content: `"${each}"` },
            }),
            {}
          ),
        }),
      }}
    />
  ),
  // TODO: hmmm don't wrap? how are gatsbyjs.org's tables responsive??
  // <Box as="figure" sx={{ overflowX: `auto`, variant: `grid.contentL` }}>
  // </Box>
  kbd: props => <kbd {...props} sx={{ variant: `styles.kbd` }} />,
  sup: 'sup',
  figure: 'figure',
  // div: 'div',
}
