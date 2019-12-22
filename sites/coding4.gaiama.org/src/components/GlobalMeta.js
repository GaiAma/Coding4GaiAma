import * as React from 'react'
import { Title, Meta, Link } from 'react-head'

export const GlobalMeta = ({ page, meta }) => {
  if (!page?.frontmatter) {
    return null
  }

  const description = page.frontmatter.description || page.excerpt

  return (
    <>
      <Title>{`${page.frontmatter.title} — ${meta.title}`}</Title>
      <Meta name="description" content={description} />
      <Link rel="canonical" href={page.fields.absoluteUrl} />

      <Meta property="og:site_name" content="Coding4GaiAma" />
      <Meta property="og:url" content={`${page.fields.absoluteUrl}`} />

      {page.frontmatter.robots && (
        <Meta name="robots" content={page.frontmatter.robots} />
      )}
    </>
  )
}
