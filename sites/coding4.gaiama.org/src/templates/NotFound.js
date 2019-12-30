/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Box } from '@theme-ui/components'
import { Link } from 'components/Link'

/**
 * TODO: improve 404
 * https://uxplanet.org/6-best-practices-for-404-pages-with-killer-ux-d9305db19ad9
 * https://optinmonster.com/best-404-page-examples/
 * https://www.shivarweb.com/13491/404-page-best-practices/
 * https://www.cludo.com/blog/best-practices-for-brilliant-404-pages/
 */
const NotFound = props => (
  <Box variant="grid">
    {!!props?.data?.page?.frontmatter?.title && (
      <h1>{props?.data?.page.frontmatter.title}</h1>
    )}
    {!!props?.data?.page?.body && (
      <MDXRenderer>{props?.data?.page.body}</MDXRenderer>
    )}
    <Box
      mb="7"
      px="6"
      py="1"
      sx={{ color: `background`, bg: `text`, borderRadius: `round` }}
    >
      <span>{props.location.host}</span>
      <span sx={{ fontWeight: `bold` }}>{props.location.pathname}</span>
    </Box>
    <Box>
      Head back to{' '}
      <Link to={props.data.homepage.fields.url}>
        {props.data.homepage.frontmatter.title}
      </Link>
    </Box>
  </Box>
)

export default NotFound

export const query = graphql`
  query($lang: String) {
    ...siteMeta

    page: mdx(
      frontmatter: { layout: { eq: "NotFound" } }
      fields: { lang: { eq: $lang } }
    ) {
      ...CommonFields
    }
  }
`
