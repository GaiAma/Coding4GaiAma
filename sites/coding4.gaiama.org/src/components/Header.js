import * as React from 'react'
import { Link } from 'gatsby'
import nano from 'nanostyled'

const Wrapper = nano(`footer`, {
  base: `text-center`,
})

// TODO: start using Flow, TypeScript or PropTypes!
export const Header = ({ title, homepage, ...props }) => (
  <Wrapper {...props}>
    <h3>
      <Link to={homepage.fields.url}>{title}</Link>
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
