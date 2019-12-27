/* global window */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as UiLink } from '@theme-ui/components'

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
      variant: _variant = `default`,
      target,
      rel,
      children,
      ...props
    },
    ref
  ) => {
    const url = to || href
    const isExt = ext || isFqdn(url)
    const Tag = as ? as : isExt ? UiLink : GatsbyLink
    const variant = !/^links\./.test(_variant) ? `links.${_variant}` : _variant
    const linkProps = {
      ref: ref,
      ...(!isExt
        ? {
            to: url,
            activeClassName: `active`,
          }
        : {
            href: url,
          }),
      ...(isExt &&
        !isAnchor(url) && {
          target: target || `_blank`,
          rel: rel || `nofollow noopener noreferrer`,
        }),
      title: title || url,
      ...props,
    }

    return (
      // <Box as="span" {...props} __themeKey="links">
      //   {linkProps.title.includes(`roadmap`) && (
      //     <Tag {...linkProps} sx={{ variant }}>
      //       {children}
      //     </Tag>
      //   )}
      <Tag {...linkProps} sx={{ variant }}>
        {children}
      </Tag>
      // </Box>
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
