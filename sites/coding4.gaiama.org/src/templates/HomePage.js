import React from 'react'
import { graphql, Link } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { cx } from '../utils/micro-classnames'

const HomePage = ({ data: { page, posts }, ...props }) => {
  return (
    <div
      className="main-grid max-w-75ch my-0 mx-auto py-4 px-8"
      /* background: linear-gradient(20deg, #db7093, #daa357); */
    >
      <MDXRenderer>{page.code.body}</MDXRenderer>

      {/* TODO: explain !! ? https://frontarm.com/james-k-nelson/react-anti-patterns-conditional-rendering/ */}
      {!!posts?.nodes?.length && (
        <div>
          {posts.nodes.map(p => (
            <article
              key={p.id}
              className={cx([`mt-12`, { 'opacity-50': p.frontmatter.draft }])}
            >
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
              <p className="mt-2">{p.frontmatter.description || p.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage

// draftBlacklist by https://github.com/gatsbyjs/gatsby/issues/12460#issuecomment-471376629
export const query = graphql`
  query($url: String!, $draftBlacklist: [Boolean!]!) {
    ...siteMeta

    page: mdx(
      fields: { url: { eq: $url } }
      frontmatter: { layout: { eq: "HomePage" } }
    ) {
      ...CommonFields
    }

    posts: allMdx(
      filter: {
        frontmatter: { type: { eq: "post" }, draft: { nin: $draftBlacklist } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        ...CommonFields
        id
        timeToRead
        excerpt
        frontmatter {
          draft
        }
      }
    }
  }
`
