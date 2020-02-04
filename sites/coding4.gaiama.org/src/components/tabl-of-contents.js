/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'components/Link'

// inspired by https://gatsby-theme-legals.netlify.com/privacy-policy
// TODO: checkout https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/
export const TableOfContents = ({ items }) =>
  !!items.length && (
    <nav>
      <ul sx={{ listStyle: 'none', m: 0, p: 0, ul: { ml: 5 } }}>
        {items.map(item => (
          <li key={item.url}>
            <Link
              variant="plain"
              to={item.url}
              sx={{ color: 'muted', p: 1, display: 'block' }}
            >
              {item.title}
            </Link>
            {!!item.children?.length && (
              <TableOfContents items={item.children} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
