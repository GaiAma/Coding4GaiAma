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
const svgIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    height="16"
    version="1.1"
    viewBox="0 0 16 16"
    width="16"
  >
    <path
      fillRule="evenodd"
      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
    ></path>
  </svg>
)
const heading = Tag => props => {
  return (
    <Tag
      {...props}
      sx={{
        ':hover a': { display: `inline` },
        a: {
          ml: `-1.51rem`,
          display: `none`,
          '@media (hover: none)': {
            display: `inline`,
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
}
