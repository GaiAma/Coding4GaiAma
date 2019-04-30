import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const TodoItem = ({ todo: t, meta: { repository: repo, branch } }) => (
  <li>
    <h4 className="mb-1" dangerouslySetInnerHTML={{ __html: t.text }} />
    <div className="text-xs text-gray-700">
      {!!t.ref && (
        <>
          <span className="mr-1">–</span>
          <span>{t.ref}</span>
        </>
      )}
      {!!t.file && (
        <>
          <span className="mr-1">–</span>
          <a
            href={`${repo}/tree/${branch}/${t.file.relativePath}#${t.line}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.file.relativePath}#{t.line}
          </a>
          <span className="mx-1">–</span>
          <span>File last modified: {t.modifiedTime}</span>
        </>
      )}
    </div>
  </li>
)

const Article = ({ data: { page, roadmap, site }, ...props }) => {
  return (
    <div className="main-grid">
      {!!page?.code?.body && <MDXRenderer>{page.code.body}</MDXRenderer>}

      {roadmap?.group?.map(x => (
        <div key={x.fieldValue}>
          <h3>{x.fieldValue}</h3>
          <ul>
            {x.nodes.map(({ id, todo }) => (
              <TodoItem todo={todo} meta={site.meta} key={id} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Article

export const query = graphql`
  query($url: String!) {
    ...siteMeta

    page: mdx(fields: { url: { eq: $url } }) {
      code {
        body
      }
      frontmatter {
        title
        type
      }
    }

    roadmap: allRoadmap(
      filter: { todo: { tag: { ne: "EmptyState" } } }
      sort: { fields: [todo___modifiedTime], order: DESC }
    ) {
      group(field: todo___tag) {
        fieldValue
        totalCount
        nodes {
          id
          todo {
            tag
            line
            ref
            text
            modifiedTime(formatString: "YYYY-MM-DD H:mm")
            file {
              relativePath
            }
          }
        }
      }
    }
  }
`
