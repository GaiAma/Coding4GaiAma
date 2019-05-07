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
            href={`${repo.url}/blob/${branch}/${repo.directory}/${
              t.file.relativePath
            }#${t.line}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.file.relativePath}#{t.line}
          </a>
          <span className="mx-1">–</span>
          {/* TODO: File last modified not working, all same on Netlify */}
          <span>File last modified: {t.modifiedTime}</span>
        </>
      )}
    </div>
  </li>
)

const getEmoji = num => <span>{num > 20 ? `😱` : num > 10 ? `😨` : `😊`}</span>

const Roadmap = ({ data: { page, roadmap, site }, ...props }) => {
  return (
    <div className="main-grid">
      {!!page?.code?.body && <MDXRenderer>{page.code.body}</MDXRenderer>}

      {roadmap?.group?.map(x => (
        <div key={x.fieldValue}>
          <h3>
            {x.fieldValue}{' '}
            <small>
              ({x.nodes.length} {getEmoji(x.nodes.length)})
            </small>
          </h3>
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

export default Roadmap

export const query = graphql`
  query($url: String!) {
    ...siteMeta

    page: mdx(fields: { url: { eq: $url } }) {
      ...CommonFields
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
