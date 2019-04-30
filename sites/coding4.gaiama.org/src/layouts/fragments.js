import { graphql } from 'gatsby'

export const Fragments = graphql`
  fragment siteMeta on Query {
    site {
      meta: siteMetadata {
        title
        siteUrl
        version
        repository
        branch
      }
    }

    homepage: mdx(frontmatter: { layout: { eq: "HomePage" } }) {
      fields {
        url
      }
    }

    footerMenu: allMdx(
      filter: { frontmatter: { menu: { eq: "footer" } } }
      sort: { fields: frontmatter___title, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          url
        }
      }
    }
  }
`
