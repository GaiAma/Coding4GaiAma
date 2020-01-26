/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { DiGithubBadge } from 'react-icons/di'
import { Link } from 'components/Link'
import { Box, Heading, Flex } from '@theme-ui/components'

const TodoItem = ({ todo: t, meta: { repository: repo, branch } }) => {
  const fileGitHubUrl = `${repo.url}/blob/${branch}/${t.file.relativePath}#${t.line}`
  return (
    <li sx={{ p: { m: 0 } }}>
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
              href={fileGitHubUrl}
              variant="plain"
              ml="1"
              sx={{ border: `none !important` }}
            >
              {t.file.relativePath}#L{t.line}
            </Link>
            {/* <span sx={{ mx: 1 }}>–</span> */}
            {/* TODO: File last modified not working, all same on Netlify */}
            {/* <span>File last modified: {t.modifiedTime}</span> */}
          </Flex>
        )}
      </div>
    </li>
  )
}

const getEmoji = num => <span>{num > 20 ? `😱` : num > 10 ? `😨` : `😊`}</span>

const isEmptyStateNotAlone = (item, _, arr) =>
  arr.length > 1 && item.fieldValue !== `EmptyState`

const roadmapSortArray = ['FIXME', 'TODO', 'NOTE', 'DONE']

const Roadmap = ({ data: { page, roadmap, site }, ...props }) => {
  // TODO: no EmptyState anymore right? 🤔
  const roadmapFilterdEmptyState = roadmap.group.filter(isEmptyStateNotAlone)

  const roadMapDb = roadmapFilterdEmptyState.reduce(
    (result, each) => ({
      ...result,
      [each.fieldValue]: each,
    }),
    {}
  )

  const renderRoadmap = () =>
    roadmapSortArray.map(label => {
      const group = roadMapDb[label]
      if (!group) {
        return null
      }
      return (
        <Fragment key={label}>
          <Heading id={label} as="h2" mb="5">
            {label}{' '}
            <small>
              ({group.nodes.length} {getEmoji(group.nodes.length)})
            </small>
          </Heading>
          <Box as="ul" variant="styles.ul">
            {group.nodes.map(({ id, todo }) => (
              <TodoItem todo={todo} meta={site.meta} key={id} />
            ))}
          </Box>
        </Fragment>
      )
    })

  return (
    <Box variant="grid">
      {!!page?.body && (
        <Box mb="4">
          <MDXRenderer>{page.body}</MDXRenderer>
        </Box>
      )}

      {/* inspired by https://dev.to/dillionmegida/making-sticky-column-with-grid-area-5eph */}
      <Flex
        mb="10"
        sx={{
          justifyContent: `space-between`,
          '@media screen and (min-width: 1030px)': {
            flexDirection: 'column',
            justifyContent: `space-around`,
            gridColumn: 3,
            gridRow: '3/4',
            position: 'sticky',
            top: 0,
          },
        }}
      >
        {roadmapSortArray.map(label => (
          <Box key={label}>
            <Link to={`#${label}`}>{label}</Link>
          </Box>
        ))}
      </Flex>

      {renderRoadmap()}

      <Box>
        Made with{' '}
        <Link to="https://www.npmjs.com/package/gatsby-transformer-leasot">
          gatsby-transformer-leasot
        </Link>
      </Box>
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

    roadmap: allLeasot(
      # filter: { todo: { tag: { ne: "EmptyState" } } }
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
