// @flow
import * as React from 'react'
import { Link } from 'gatsby'
import nano from 'nanostyled'

const Wrapper = nano(`footer`, {
  base: `text-center`,
})

type Props = {
  title: string,
  subtitle: string,
  homepage: {
    fields: {
      url: string,
    },
  },
}

export const Header = ({ title, subtitle, homepage, ...props }: Props) =>
  !homepage ? null : (
    <Wrapper {...props}>
      <h3>
        <Link className="block" to={homepage.fields.url}>
          {title}
        </Link>
        {!!subtitle && <small>{subtitle}</small>}
      </h3>
      {/* <ThemeToggler>
          {({ theme, toggleTheme }) =>
            !!theme && (
              <label className="absolute top-0 right-0 m-4">
                {console.log({ theme })}
                <Toggle
                  defaultChecked={theme === `dark`}
                  icons={false}
                  // icons={{
                  //   checked: <Heart />,
                  //   unchecked: null,
                  // }}
                  onChange={handleThemeChange(toggleTheme)}
                />
                <span>Dark mode</span>
              </label>
            )
          }
        </ThemeToggler> */}
    </Wrapper>
  )
