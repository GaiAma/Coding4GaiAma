import React from 'react'
import { graphql, Link } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const Article = ({ data: { page }, ...props }) => {
  return (
    <article
      // className="max-w-75ch my-0 mx-auto py-4 px-8"
      /* background: linear-gradient(20deg, #db7093, #daa357); */
      className="main-grid"
    >
      <header className="mb-8">
        <h1 className="mb-0">{page.frontmatter.title}</h1>
        <small className="text-gray-700">
          <Link to={page.fields.url} className="text-gray-700">
            <time>{page.frontmatter.date}</time>
          </Link>
        </small>
      </header>

      <MDXRenderer>{page.code.body}</MDXRenderer>
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
      fields {
        url
      }
      tableOfContents
    }
  }
`
