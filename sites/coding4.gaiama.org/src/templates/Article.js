// @flow
import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import ShareButtons from 'components/ShareButtons'
import { cx } from 'src/utils/micro-classnames'

import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'src/layouts/gatsby-prism.scss'

type Props = {
  data: {
    page: {
      frontmatter: {
        title: string,
        description: string,
        date: string,
      },
      fields: {
        shareableUrl: string,
        shareableUrlAbsolute: string,
      },
      code: {
        body: string,
      },
      author: {
        code: {
          body: string,
        },
        frontmatter: {
          name: string,
          twitterHandle: string,
          image: any,
          links: Array<{
            url: string,
            name: string,
          }>,
        },
      },
    },
  },
}

const Article = ({ data: { page }, ...props }: Props) => {
  // const description = page.frontmatter.description
  return (
    <article
      // className="max-w-75ch my-0 mx-auto py-4 px-8"
      /* background: linear-gradient(20deg, #db7093, #daa357); */
      className="main-grid"
    >
      <header className="mb-8">
        <h1 className="mb-0">
          <span itemProp="headline">{page.frontmatter.title}</span>
          {/* {!!description && <small itemProp="description">{description}</small>} */}
        </h1>
        <small className="text-gray-700">
          <Link to={page.fields.shareableUrl} className="text-gray-700">
            <time dateTime={page.frontmatter.dateTime}>
              {page.frontmatter.date}
            </time>
          </Link>
        </small>
      </header>

      <MDXRenderer>{page.code.body}</MDXRenderer>

      <ShareButtons
        className="my-6"
        title={page.frontmatter.title}
        twitterHandle={page.author.frontmatter.twitterHandle.replace(/^@/, ``)}
        url={page.fields.shareableUrlAbsolute}
        emailBody={`${page.fields.shareableUrlAbsolute}`}
        // onClick={add Analytics}
      >
        Share/Discuss on Twitter
      </ShareButtons>

      <footer className="flex justify-start align-start mt-8">
        <Img
          className="rounded-full"
          {...page.author.frontmatter.image.childImageSharp}
        />
        <div className="ml-4">
          <h4 className="mt-0 mb-1">{page.author.frontmatter.name}</h4>
          <div className="text-sm">
            <MDXRenderer>{page.author.code.body}</MDXRenderer>
          </div>
          <div className="flex text-sm">
            {page.author.frontmatter.links.map((l, i) => (
              <div key={l.url} className={cx([{ 'ml-2': i % 2 === 1 }])}>
                <a href={l.url} target="blank" rel="noopener">
                  {l.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </article>
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
        shareableUrlAbsolute
      }
      author {
        code {
          body
        }
        frontmatter {
          name
          image {
            childImageSharp {
              fixed(width: 120, height: 120, quality: 75, cropFocus: ENTROPY) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          twitterHandle
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
