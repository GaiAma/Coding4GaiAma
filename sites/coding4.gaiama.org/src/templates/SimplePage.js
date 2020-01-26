/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Box } from '@theme-ui/components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from '../components/Link'

// inspired by https://gatsby-theme-legals.netlify.com/privacy-policy
const TableOfContents = ({ items }) =>
  !!items.length && (
    <ul>
      {items.map(item => (
        <li key={item.url}>
          <Link variant="muted" to={item.url}>
            {item.title}
          </Link>
          {!!item.children?.length && <TableOfContents items={item.children} />}
        </li>
      ))}
    </ul>
  )

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
                mr: 5,
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
