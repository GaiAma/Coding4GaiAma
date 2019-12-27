import * as React from 'react'
import { Title, Meta, Link } from 'react-head'
import { useThemeUI } from 'theme-ui'

export const GlobalMeta = ({ page, meta }) => {
  const { theme } = useThemeUI()

  if (!page?.frontmatter) {
    return null
  }

  const description = page.frontmatter.description || page.excerpt

  return (
    <React.Fragment>
      <Title>{`${page.frontmatter.title} — ${meta.title}`}</Title>
      <Meta name="description" content={description} />
      <Link rel="canonical" href={page.fields.absoluteUrl} />

      <Meta property="og:site_name" content="Coding4GaiAma" />
      <Meta property="og:url" content={`${page.fields.absoluteUrl}`} />

      {page.frontmatter.robots && (
        <Meta name="robots" content={page.frontmatter.robots} />
      )}
      <Meta name="theme-color" content={theme.colors.background} />
    </React.Fragment>
  )
}
