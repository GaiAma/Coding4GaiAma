/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
// import { FiEdit } from 'react-icons/fi'
import { GlobalMeta } from 'components/GlobalMeta'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

// import 'normalize.css'
// import 'modern-normalize'
import { Global } from '@emotion/core'
// import { Link } from 'components/Link'

// import 'typeface-cormorant-garamond'
// import 'typeface-proza-libre'
// import 'typeface-merriweather-sans'

// minmax(min(1fr, calc(92% - 20px)), 40rem)
const Main = props => <div {...props} />

const Layout = ({ children, data, ...props }) =>
  (process.env.NODE_ENV !== `production` && console.log(data, props)) || (
    <Fragment>
      <Styled.root>
        <GlobalMeta page={data?.page} meta={data?.site?.meta} />
        <Global
          styles={{
            '*': {
              boxSizing: 'border-box',
            },
            body: {
              margin: 0,
            },
          }}
        />
        <div className={`type-${data?.page?.frontmatter?.type}`}>
          <Main>
            <Header
              title={data?.site?.meta.title}
              subtitle={data?.site?.meta.description}
              homepage={data?.homepage}
              sx={{ gridColumn: 5 }}
            />

            <MDXProvider>{children}</MDXProvider>

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
          </Main>
        </div>
      </Styled.root>
    </Fragment>
  )

export default Layout
