/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'components/Link'
import { Heading, Box, Text } from '@theme-ui/components'

const HomePage = ({ data: { page, posts }, ...props }) => {
  // const context = useThemeUI()
  // console.log(context)
  return (
    <Box variant="grid">
      <Box mb="4">
        <MDXRenderer>{page.body}</MDXRenderer>
      </Box>

      {/* TODO: explain '!!' ? https://frontarm.com/james-k-nelson/react-anti-patterns-conditional-rendering/ */}
      {!!posts?.nodes?.length && (
        <Box>
          {posts.nodes.map(p => (
            <Box
              as="article"
              key={p.id}
              mb="12"
              sx={{
                ...(!p.frontmatter.isPublished && {
                  opacity: 0.3,
                  ':hover': { opacity: 0.6 },
                }),
              }}
            >
              <Box as="header">
                <Heading as="h2">
                  <Link variant="plain" to={p.fields.url}>
                    {p.frontmatter.title}
                  </Link>
                </Heading>
                <Text as="small" sx={{ color: `subtle` }}>
                  <time
                    dateTime={
                      p.frontmatter.updatedTime ?? p.frontmatter.dateTime
                    }
                  >
                    {p.frontmatter.updated ?? p.frontmatter.date}
                  </time>
                  <span sx={{ mx: 2 }}>–</span>
                  <span>{p.timeToRead} min read</span>
                </Text>
              </Box>
              <Text as="p" mt="2">
                {p.frontmatter.description || p.excerpt}
                <Link to={p.fields.url} variant="plain" sx={{ ml: 2 }}>
                  .. read on
                </Link>
              </Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default HomePage

// draftBlacklist by https://github.com/gatsbyjs/gatsby/issues/12460#issuecomment-471376629
export const query = graphql`
  query($url: String!, $publishedList: [Boolean!]!) {
    ...siteMeta

    page: mdx(
      fields: { url: { eq: $url } }
      frontmatter: { layout: { eq: "HomePage" } }
    ) {
      ...CommonFields
    }

    posts: allMdx(
      filter: {
        frontmatter: {
          type: { eq: "post" }
          isPublished: { in: $publishedList }
        }
      }
      sort: { fields: [fields___updated, frontmatter___date], order: DESC }
    ) {
      nodes {
        ...CommonFields
        id
        timeToRead
        excerpt
        frontmatter {
          isPublished
        }
      }
    }
  }
`
