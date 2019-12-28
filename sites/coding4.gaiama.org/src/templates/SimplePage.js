/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Box } from '@theme-ui/components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const SimplePage = ({ data: { page }, ...props }) => {
  return (
    <Box variant="grid">
      <MDXRenderer>{page.body}</MDXRenderer>
    </Box>
  )
}

export default SimplePage

export const query = graphql`
  query($url: String!) {
    ...siteMeta

    page: mdx(
      fields: { url: { eq: $url } }
      frontmatter: { layout: { eq: "SimplePage" } }
    ) {
      ...CommonFields
      tableOfContents
    }
  }
`
