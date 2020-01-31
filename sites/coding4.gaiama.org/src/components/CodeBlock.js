/** @jsx jsx */
import { jsx } from 'theme-ui'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

// NOTE: check out [reakit-playground](https://github.com/reakit/reakit/tree/master/packages/reakit-playground)

const codeFenceRegex = /language-(?<lang>[^{\s]+)(?:\{(?<lineStart>\d*)(?:-(?<lineEnd>.*))?\})?/i

const languages = new Map([
  [`js`, `JavaScript`],
  [`ts`, `Typescript`],
  [`css`, `CSS`],
  [`graphql`, `GraphQL`],
  [`md`, `M↓`],
  [`bash`, `Bash`],
])

// TODO: add copy to clipboard button https://github.com/gatsbyjs/gatsby/pull/15834/files

export const CodeBlock = ({ children, className, highlight, ...props }) => {
  const codeFence = className.match(codeFenceRegex)
  const language = codeFence?.groups.lang ?? null
  const highlightStart = parseInt(codeFence?.groups.lineStart ?? null)
  const highlightEnd = parseInt(codeFence?.groups.lineEnd ?? null)
  const hasTopbar = !!props.title || !!language
  const hasLineNumbers = !!props.showLineNumbers
  // const language = className.replace(/language-/, '')
  // const [highlightStart, highlightEnd] = `${highlight}`.split(`-`).map(parseInt)
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div sx={{ position: `relative` }}>
          <div
            className={className}
            sx={{
              ...style,
              p: 0,
              m: 0,
              counterReset: `linenumbers`,
              position: `relative`,
              pb: 5,
            }}
          >
            {hasTopbar && (
              <div
                sx={{
                  display: `flex`,
                  justifyContent: `space-between`,
                  alignItems: `start`,
                  position: `sticky`,
                  top: 0,
                  color: 'background',
                }}
              >
                {!!props.title && (
                  <div
                    sx={{
                      bg: `subtle`,
                      px: 2,
                      mb: 3,
                      mr: `auto`,
                      borderBottomRightRadius: `lg`,
                      fontSize: 0,
                    }}
                  >
                    {props.title}
                  </div>
                )}
                {!!language && (
                  <div
                    sx={{
                      ml: `auto`,
                      bg: `subtle`,
                      px: 2,
                      borderBottomLeftRadius: `lg`,
                      fontSize: 0,
                    }}
                  >
                    {languages.get(language) || language.toUpperCase()}
                  </div>
                )}
              </div>
            )}

            <pre
              sx={{
                m: 0,
                pt: !hasTopbar && 4,
                overflow: `auto`,
                maxHeight: 500,
              }}
            >
              {tokens.map((line, i) => {
                if (
                  (i === 0 || i === tokens.length - 1) &&
                  !line.filter(l => l.content).length
                ) {
                  return null
                }

                // NOTE: maybe use 'user-select: none' for line no. like [kcd](https://kentcdodds.com/blog/super-simple-start-to-es-modules-in-the-browser)
                const lineNo = i + 1
                const isLineHighlighted = highlightEnd
                  ? lineNo >= highlightStart && lineNo <= highlightEnd
                  : highlightStart
                  ? lineNo === highlightStart
                  : false

                const lineStartsWithMinus = line[0]?.content.startsWith(`-`)
                const lineStartsWithPlus = line[0]?.content.startsWith(`+`)

                // border left example https://gregperlman.dev/creating-a-gatsby-plugin-with-typescript/
                const backgroundColor = lineStartsWithMinus
                  ? `codeError`
                  : lineStartsWithPlus
                  ? `codeSuccess`
                  : isLineHighlighted && `codeLineHighlight`

                return (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    sx={{
                      backgroundColor, // NOTE: maybe apply only to <spans>?
                      display: `grid`,
                      gridTemplateColumns: `20px auto`,
                      px: 3,
                    }}
                  >
                    <div
                      sx={
                        hasLineNumbers && {
                          ':before': {
                            textAlign: `right`,
                            counterIncrement: `linenumbers`,
                            content: `counter(linenumbers)`,
                            display: `inline-block`,
                            width: `1.2rem`,
                            borderRight: `1px black solid`,
                            paddingRight: `0.5rem`,
                            marginRight: `1rem`,
                            pointerEvents: `none`,
                            userSelect: `none`,
                          },
                        }
                      }
                    >
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </pre>
          </div>
        </div>
      )}
    </Highlight>
  )
}
