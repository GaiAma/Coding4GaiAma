import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const SimplePage = ({ data: { page }, ...props }) => {
  return (
    <div className="main-grid">
      <MDXRenderer>{page.code.body}</MDXRenderer>
    </div>
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
      code {
        body
      }
      frontmatter {
        title
        type
        date(formatString: "YYYY-MM-DD")
      }
      fields {
        url
      }
      tableOfContents
    }
  }
`
