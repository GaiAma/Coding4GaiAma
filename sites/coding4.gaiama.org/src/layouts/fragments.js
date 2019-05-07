import { graphql } from 'gatsby'

export const Fragments = graphql`
  fragment CommonFields on Mdx {
    code {
      body
    }
    frontmatter {
      title
      type
      date(formatString: "YYYY-MM-DD")
      dateTime: date(formatString: "YYYY-MM-DD")
      description
      robots
    }
    fields {
      url
      shareableUrl
      absoluteUrl
      editLink
      shareableUrlAbsolute
    }
  }

  fragment siteMeta on Query {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        version
        branch
        repository {
          url
          directory
        }
      }
    }

    homepage: mdx(frontmatter: { layout: { eq: "HomePage" } }) {
      frontmatter {
        title
      }
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
