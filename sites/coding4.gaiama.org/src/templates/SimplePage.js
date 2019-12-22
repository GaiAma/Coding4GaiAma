import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const SimplePage = ({ data: { page }, ...props }) => {
  return (
    <div className="main-grid">
      <MDXRenderer>{page.body}</MDXRenderer>
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
      ...CommonFields
      tableOfContents
    }
  }
`
