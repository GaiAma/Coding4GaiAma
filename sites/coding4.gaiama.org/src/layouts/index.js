/** @jsx jsx */
import { jsx, Styled, Layout as UiLayout } from 'theme-ui'
import { Box } from '@theme-ui/components'
import { Global } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { GlobalMeta } from 'components/GlobalMeta'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import SkipLink from 'components/SkipLink'
// import 'normalize.css'
// import 'modern-normalize'
// import 'typeface-cormorant-garamond'
// import 'typeface-proza-libre'
// import 'typeface-merriweather-sans'

const isProduction = process.env.NODE_ENV === `production`

// minmax(min(1fr, calc(92% - 20px)), 40rem)
// const Main = props => <div {...props} />

const Layout = ({ children, data, ...props }) =>
  (!isProduction && console.log(data, props)) || (
    <Styled.root>
      <UiLayout>
        <SkipLink>Skip to content</SkipLink>
        <GlobalMeta page={data?.page} meta={data?.site?.meta} />
        <Global styles={theme => theme.styles.Global} />
        <div className={`type-${data?.page?.frontmatter?.type}`}>
          {/* <Main> */}
          <Header
            title={data?.site?.meta.title}
            subtitle={data?.site?.meta.description}
            homepage={data?.homepage}
            sx={{ maxWidth: `90vw`, mx: `auto` }}
          />

          <Box
            as="main"
            id="content"
            mb="10"
            sx={{ maxWidth: `90vw`, mx: `auto` }}
          >
            <MDXProvider>{children}</MDXProvider>
          </Box>

          <Footer
            mt="4"
            mb="3"
            variant="styles.Footer"
            meta={data?.site?.meta}
            menu={data?.footerMenu?.nodes}
            editLink={data?.page?.fields?.editLink}
            // additionalLinks={[
            //   {
            //     url: data?.page?.fields?.editLink,
            //     title: (
            //       <span>
            //         <FiEdit />
            //         Edit
            //       </span>
            //     ),
            //   },
            // ]}
          />
          {/* </Main> */}
        </div>
      </UiLayout>
    </Styled.root>
  )

export default Layout
