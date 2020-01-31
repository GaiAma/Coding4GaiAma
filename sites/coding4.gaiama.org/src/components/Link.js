/** @jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as UiLink } from '@theme-ui/components'

const isFqdn = x => !/^\/(?!\/)/.test(x)
const isAnchor = x => /^#/.test(x)
// TODO: publish as @gaiama/gatsby-link
export const Link = forwardRef(
  (
    {
      to,
      href,
      title,
      as,
      ext,
      variant: _variant = `default`,
      active = true,
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
            activeClassName: active ? `active` : ``,
          }
        : {
            href: url,
          }),
      ...(isExt &&
        !isAnchor(url) && {
          target: target || `_blank`,
          // removed `nofollow` https://backlinko.com/nofollow-link
          rel: rel || `noopener noreferrer`,
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
