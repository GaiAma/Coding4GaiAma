// @flow
import * as React from 'react'
import { Link } from 'gatsby'
import nano from 'nanostyled'

const Wrapper = nano(`footer`, {
  base: `text-center text-xs`,
})

type SharedFields = {
  id: string,
  fields: { url: string },
  frontmatter: { title: string },
}

type Props = {
  menu: Array<SharedFields>,
  additionalLinks: Array<SharedFields>,
}

export const Footer = ({ menu, additionalLinks, ...props }: Props) =>
  !menu?.length ? null : (
    <Wrapper {...props}>
      <div className="flex justify-center">
        {!!menu.length &&
          menu.map(m => (
            <div key={m.id || m.fields.url}>
              <Link className="px-2" to={m.fields.url}>
                {m.frontmatter.title}
              </Link>
            </div>
          ))}
        {!!additionalLinks.length &&
          additionalLinks.map(m => (
            <div key={m.url}>
              <a
                className="px-2"
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {m.title}
              </a>
            </div>
          ))}
      </div>
      <div className="text-gray-600 mt-2">
        Content & source code MIT licensed{' '}
      </div>
    </Wrapper>
  )
