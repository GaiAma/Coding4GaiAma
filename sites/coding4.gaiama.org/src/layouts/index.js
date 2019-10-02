import React from 'react'
// import Toggle from 'react-toggle'
import { MDXProvider } from '@mdx-js/react'
import { GlobalMeta } from 'components/GlobalMeta'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// import 'normalize.css'
// import 'modern-normalize'
import './global.scss'
// import indexStyles from './index.module.scss'
// import 'react-toggle/style.css'

// import 'typeface-cormorant-garamond'
// import 'typeface-proza-libre'
// import 'typeface-merriweather-sans'

const elements = {}
const providerOptions = { components: { ...elements } }

// const handleThemeChange = toggleTheme => e =>
//   toggleTheme(e.target.checked ? 'dark' : 'light')

const Layout = ({ children, data, ...props }) =>
  (process.env.NODE_ENV !== `production` && console.log(data, props)) || (
    <>
      <GlobalMeta page={data?.page} meta={data?.site?.meta} />
      <div className={`type-${data?.page?.frontmatter?.type}`}>
        {/* TODO: move into grid like article header */}
        <Header
          className="text-center"
          title={data?.site?.meta.title}
          subtitle={data?.site?.meta.description}
          homepage={data?.homepage}
        />

        <main>
          <MDXProvider {...providerOptions}>{children}</MDXProvider>
        </main>

        <Footer
          className="max-w-2xl mx-auto mt-12 mb-2"
          menu={data?.footerMenu?.nodes}
          additionalLinks={[
            {
              url: data?.page?.fields?.editLink,
              title: `Edit page on GitHub`,
            },
          ]}
        />
      </div>
    </>
  )

export default Layout

// import React from 'react'
// import { ThemeProvider } from 'gatsby-theme-context'
// import { themes } from 'src/themes/Main/theme'

// const Layout = ({ children, ...props }) => (
//   <ThemeProvider value={{ themes, defaultTheme: `dark` }}>
//     {children}
//   </ThemeProvider>
// )

// export default Layout
