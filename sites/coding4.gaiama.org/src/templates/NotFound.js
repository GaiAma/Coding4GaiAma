import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

/**
 * TODO: improve 404
 * https://uxplanet.org/6-best-practices-for-404-pages-with-killer-ux-d9305db19ad9
 * https://optinmonster.com/best-404-page-examples/
 * https://www.shivarweb.com/13491/404-page-best-practices/
 * https://www.cludo.com/blog/best-practices-for-brilliant-404-pages/
 */
const NotFound = props => {
  return (
    <div className="main-grid">
      {!!props?.data?.page?.frontmatter?.title && (
        <h1>{props?.data?.page.frontmatter.title}</h1>
      )}
      <div className="my-12">
        {!!props?.data?.page?.code?.body && (
          <MDXRenderer>{props?.data?.page.code.body}</MDXRenderer>
        )}
        <div className="bg-gray-300 text-gray-900 px-6 py-1 font-normal rounded-full border border-gray-300">
          <span>{props.location.host}</span>
          <span className="font-bold">{props.location.pathname}</span>
        </div>
        <div className="mt-4">
          Head back to{' '}
          <a href={props.data.homepage.fields.url}>
            {props.data.homepage.frontmatter.title}
          </a>
        </div>
      </div>
    </div>
  )
}

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
