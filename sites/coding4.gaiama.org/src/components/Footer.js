import * as React from 'react'
import { Link } from 'gatsby'
import nano from 'nanostyled'

const Wrapper = nano(`footer`, {
  base: `text-center mt-4 mb-2`,
})

export const Footer = ({ menu, ...props }) =>
  !menu.length ? null : (
    <Wrapper {...props}>
      {!!menu.length && (
        <div className="flex justify-center text-xs">
          {menu.map(m => (
            <div key={m.id}>
              <Link className="px-2" to={m.fields.url}>
                {m.frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  )
