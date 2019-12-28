/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { DiGithubBadge } from 'react-icons/di'
import { Link } from 'components/Link'
import { Box, Heading, Flex } from '@theme-ui/components'

const TodoItem = ({ todo: t, meta: { repository: repo, branch } }) => (
  <li sx={{ p: { m: 0 } }}>
    {/* <h4
      sx={{ mb: 1, a: { variant: `links.default` } }}
      dangerouslySetInnerHTML={{ __html: t.text }}
    /> */}
    <MDXRenderer>{t.value}</MDXRenderer>
    <div sx={{ fontSize: 1, variant: `text.muted` }}>
      {!!t.ref && (
        <Fragment>
          <span sx={{ mr: 1 }}>–</span>
          <span>{t.ref}</span>
        </Fragment>
      )}
      {!!t.file && (
        <Flex variant="text.dim" sx={{ alignItems: `center` }}>
          <DiGithubBadge size="1.3rem" />
          <Link
            href={`${repo.url}/blob/${branch}/${repo.directory}/${t.file.relativePath}#${t.line}`}
            variant="plain"
            ml="1"
          >
            {t.file.relativePath}#{t.line}
          </Link>
          <span sx={{ mx: 1 }}>–</span>
          {/* TODO: File last modified not working, all same on Netlify */}
          <span>File last modified: {t.modifiedTime}</span>
        </Flex>
      )}
    </div>
  </li>
)

const getEmoji = num => <span>{num > 20 ? `😱` : num > 10 ? `😨` : `😊`}</span>

const Roadmap = ({ data: { page, roadmap, site }, ...props }) => {
  return (
    <Box variant="grid">
      {!!page?.body && (
        <Box mb="4">
          <MDXRenderer>{page.body}</MDXRenderer>
        </Box>
      )}

      {roadmap?.group?.map(x => (
        <Fragment key={x.fieldValue}>
          <Heading as="h3" mb="5">
            {x.fieldValue}{' '}
            <small>
              ({x.nodes.length} {getEmoji(x.nodes.length)})
            </small>
          </Heading>
          <Box as="ul" variant="styles.ul">
            {x.nodes.map(({ id, todo }) => (
              <TodoItem todo={todo} meta={site.meta} key={id} />
            ))}
          </Box>
        </Fragment>
      ))}
    </Box>
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
            #text
            value
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
