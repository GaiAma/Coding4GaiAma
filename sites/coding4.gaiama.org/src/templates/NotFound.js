import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const Article = ({ data: { page }, ...props }) => {
  return (
    <article>
      <header className="mb-8">
        {!!page?.frontmatter?.title && (
          <h1 className="mb-0">{page.frontmatter.title}</h1>
        )}
        {!!page?.frontmatter?.date && (
          <small className="text-gray-700">
            <time>{page.frontmatter.date}</time>
          </small>
        )}
      </header>
      {!!page?.code?.body && <MDXRenderer>{page.code.body}</MDXRenderer>}
    </article>
  )
}

export default Article

export const query = graphql`
  query($url: String!) {
    ...siteMeta

    page: mdx(
      fields: { url: { eq: $url } }
      frontmatter: { layout: { eq: "Article" } }
    ) {
      code {
        body
      }
      frontmatter {
        title
        type
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
