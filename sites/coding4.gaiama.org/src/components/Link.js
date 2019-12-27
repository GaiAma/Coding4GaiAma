/* global window */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef } from 'react'
// import PropTypes from 'prop-types'
import { Box, Link as UiLink } from '@theme-ui/components'
// import * as QS from '@gaiama/query-string'
import { Link as GatsbyLink } from 'gatsby'

/**
 * fix custom scroll behaviour using __navigatingToLink
 * by https://github.com/gatsbyjs/gatsby/issues/7454#issuecomment-415786239
 * as reach/router does not (yet) provide the used action for onRouteUpdate
 */
if (typeof window !== `undefined`) {
  window.__navigatingToLink = false
}

const isFqdn = x => !/^\/(?!\/)/.test(x)
const isAnchor = x => /^#/.test(x)

export const Link = forwardRef(
  (
    {
      to,
      href,
      title,
      as,
      ext,
      variant = `default`,
      target,
      rel,
      children,
      ...props
    },
    ref
  ) => {
    const url = to || href
    const isExt = ext || isFqdn(url)
    const Tag = as ? as : isExt ? `a` : GatsbyLink
    const linkProps = {
      as: Tag,
      variant,
      ...(!isExt
        ? { to: url }
        : {
            href: url,
          }),
      ...(isExt &&
        !isAnchor(url) && {
          target: target || `_blank`,
          rel: rel || `nofollow noopener noreferrer`,
        }),
      title: title || url,
    }
    return (
      <Box as="span" {...props} __themeKey="links">
        <UiLink ref={ref} {...linkProps}>
          {children}
        </UiLink>
      </Box>
    )
  }
)
// Link.propTypes = {
//   to: PropTypes.string,
//   href: PropTypes.string,
//   variant: PropTypes.string,
//   target: PropTypes.string,
//   rel: PropTypes.string,
//   as: PropTypes.string,
//   ext: PropTypes.bool,
// }
// Link.defaultProps = {
//   variant: `default`,
// }
