/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Box } from '@theme-ui/components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { TableOfContents } from 'components/tabl-of-contents'

const SimplePage = ({ data: { page }, ...props }) => {
  // does that always work?
  const toc = page.frontmatter.showTableOfContents === true ? page.toc : []
  return (
    <Box variant="grid">
      {!!toc?.length && (
        <Box
          sx={{
            color: 'muted',
            '@media screen and (min-width: 1030px)': {
              gridRow: '1',
              gridColumn: '9/-1',
              position: 'sticky',
              top: 50,
            },
          }}
        >
          <Box
            sx={{
              '@media screen and (min-width: 1030px)': {
                position: `absolute`,
                mx: 5,
              },
            }}
          >
            <h4 sx={{ textTransform: `uppercase` }}>Table of contents</h4>
            <TableOfContents items={toc} />
          </Box>
        </Box>
      )}

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
      toc
      frontmatter {
        showTableOfContents
      }
    }
  }
`
