import * as React from 'react'
import { Title, Meta } from 'react-head'

export const GlobalMeta = ({ page, meta }) => {
  if (!page?.frontmatter) {
    return null
  }

  const description = page.frontmatter.summary || page.excerpt

  return (
    <>
      <Title>{`${page.frontmatter.title} — ${meta.title}`}</Title>
      <Meta name="description" content={description} />
    </>
  )
}
