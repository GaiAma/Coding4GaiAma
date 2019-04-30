import React from 'react'
import { graphql, Link } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const HomePage = ({ data: { page, posts }, ...props }) => {
  return (
    <div
      className="main-grid max-w-75ch my-0 mx-auto py-4 px-8"
      /* background: linear-gradient(20deg, #db7093, #daa357); */
    >
      <MDXRenderer>{page.code.body}</MDXRenderer>

      {!!posts?.nodes?.length && (
        <div>
          {posts.nodes.map(p => (
            <article key={p.id} className="mt-12">
              <header>
                <h2 className="border-none mb-0 pb-0">
                  <Link to={p.fields.url}>{p.frontmatter.title}</Link>
                </h2>
                <small className="">
                  <time dateTime={p.frontmatter.dateTime}>
                    {p.frontmatter.date}
                  </time>
                  <span className="mx-2">–</span>
                  <span>{p.timeToRead} min read</span>
                </small>
              </header>
              <p className="mt-2">{p.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage

export const query = graphql`
  query($url: String!) {
    ...siteMeta

    page: mdx(
      fields: { url: { eq: $url } }
      frontmatter: { layout: { eq: "HomePage" } }
    ) {
      code {
        body
      }
      frontmatter {
        title
        type
      }
    }

    posts: allMdx(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        timeToRead
        excerpt
        code {
          body
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          dateTime: date(formatString: "YYYY-MM-DD")
        }
        fields {
          url
        }
      }
    }
  }
`
