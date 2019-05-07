import * as React from 'react'
import { Title, Meta, Link } from 'react-head'

export const GlobalMeta = ({ page, meta }) => {
  if (!page?.frontmatter) {
    return null
  }

  const description = page.frontmatter.summary || page.excerpt

  return (
    <>
      <Title>{`${page.frontmatter.title} — ${meta.title}`}</Title>
      <Meta name="description" content={description} />
      <Link rel="canonical" href={page.fields.absoluteUrl} />

      {page.frontmatter.robots && (
        <Meta name="robots" content={page.frontmatter.robots} />
      )}
    </>
  )
}
