/** @jsx jsx */
import { jsx } from 'theme-ui' // TODO: remove theme-ui dependency
import { forwardRef, isValidElement } from 'react'
import { Link as GatsbyLink } from 'gatsby'

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
      extAs,
      variant: _variant = `default`, // FIXME: won't work without theme-ui
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
    const Tag = as
      ? as
      : !isExt
      ? GatsbyLink
      : isValidElement(extAs)
      ? extAs
      : `a`
    const variant = !/^links\./.test(_variant) ? `links.${_variant}` : _variant
    const linkProps = Object.assign(
      { ref: ref },
      !isExt && {
        to: url,
        activeClassName: active ? `active` : ``,
      },
      isExt && {
        href: url,
      },
      isExt &&
        !isAnchor(url) && {
          target: target || `_blank`,
          // removed `nofollow` https://backlinko.com/nofollow-link
          // https://developers.google.com/web/tools/lighthouse/audits/noopener
          // https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/
          // remove `noreferrer`
          rel: rel || `noopener`,
        },
      { title: title || url },
      props
    )

    return (
      <Tag {...linkProps} sx={{ variant }}>
        {children}
      </Tag>
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
