/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { FiEdit } from 'react-icons/fi'
import { ShareButtons } from 'components/ShareButtons'
import { Link } from 'components/Link'
import { Flex, Box, Heading } from '@theme-ui/components'

// type Props = {
//   data: {
//     page: {
//       frontmatter: {
//         title: string,
//         description: string,
//         date: string,
//         dateTime: string,
//       },
//       fields: {
//         shareableUrl: string,
//         absoluteUrl: string,
//       },
//       body: string,
//       author: {
//         body: string,
//         frontmatter: {
//           name: string,
//           twitterHandle: string,
//           image: any,
//           links: Array<{
//             url: string,
//             name: string,
//           }>,
//         },
//       },
//     },
//   },
// }

const Article = ({ data: { page, site }, ...props }) => {
  // const description = page.frontmatter.description
  const { absoluteUrl } = page.fields
  return (
    <Box variant="grid">
      <Box as="header" mb="9">
        <Heading as="h1">
          <span itemProp="headline">{page.frontmatter.title}</span>
          {/* {!!description && <small itemProp="description">{description}</small>} */}
        </Heading>
        <Box as="small" variant="text.muted">
          {/* <Link variant="dim" to={page.fields.url}> */}
          <time dateTime={page.frontmatter.dateTime}>
            {page.frontmatter.date}
          </time>
          {/* </Link> */}
        </Box>
      </Box>

      <MDXRenderer>{page.body}</MDXRenderer>

      <ShareButtons
        sx={{ gridColumn: `1/7`, mt: 4 }}
        title={page.frontmatter.title}
        twitterHandle={site.meta.title}
        url={absoluteUrl}
        emailBody={`${absoluteUrl}`}
        // onClick={add Analytics}
      >
        Share/Discuss on Twitter
      </ShareButtons>

      {/* <Link to={page?.fields?.editLink}>
        <span>
          <FiEdit />
          Edit
        </span>
      </Link> */}

      <Box as="footer" mt="10">
        <Flex sx={{ justifyContent: `start`, alignItems: `start` }}>
          <Img
            {...page.author.frontmatter.image.childImageSharp}
            sx={{ borderRadius: `egg` }}
          />
          <Box ml="4">
            <Heading as="h4">{page.author.frontmatter.name}</Heading>
            <Box variant="text.small" mt="1">
              <MDXRenderer>{page.author.body}</MDXRenderer>
            </Box>
            <Flex variant="text.small" mt="1">
              {page.author.frontmatter.links.map((l, i) => (
                <Box key={l.url} ml={i > 0 ? 3 : 0}>
                  <Link href={l.url} target="blank" rel="noopener">
                    {l.name}
                  </Link>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
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
      ...CommonFields
      #tableOfContents
      fields {
        shareableUrl
        absoluteUrl
      }
      author {
        body
        frontmatter {
          name
          image {
            childImageSharp {
              fixed(width: 80, height: 80, quality: 75, cropFocus: ENTROPY) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          links {
            name
            type
            url
          }
        }
      }
    }
  }
`
