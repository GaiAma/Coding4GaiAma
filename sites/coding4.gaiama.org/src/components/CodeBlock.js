/** @jsx jsx */
import { jsx } from 'theme-ui'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

// console.log(`prism`, theme)

const codeFenceRegex = /language-(?<lang>[^{\s]+)(?:\{(?<lineStart>\d*)(?:-(?<lineEnd>.*))?\})?/i

const languages = new Map([
  [`js`, `JavaScript`],
  [`ts`, `Typescript`],
  [`css`, `CSS`],
  [`graphql`, `GraphQL`],
  [`md`, `M↓`],
  [`bash`, `Bash`],
])

export const CodeBlock = ({ children, className, highlight, ...props }) => {
  const codeFence = className.match(codeFenceRegex)
  const language = codeFence.groups.lang
  const highlightStart = parseInt(codeFence.groups.lineStart)
  const highlightEnd = parseInt(codeFence.groups.lineEnd)
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
          <pre
            className={className}
            sx={{
              ...style,
              px: 0,
              m: 0,
              overflow: `scroll`,
              counterReset: `linenumbers`,
            }}
          >
            {tokens.map((line, i) => {
              const lineNo = i + 1
              const isLineHighlighted = highlightEnd
                ? lineNo >= highlightStart && lineNo <= highlightEnd
                : highlightStart
                ? lineNo === highlightStart
                : false

              return (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  sx={{
                    backgroundColor: isLineHighlighted && `codeLineHighlight`,
                    display: `grid`,
                    gridTemplateColumns: `20px auto`,
                    px: 3,
                  }}
                >
                  <div
                    sx={{
                      textAlign: `right`,
                      ':before': {
                        counterIncrement: `linenumbers`,
                        content: `counter(linenumbers)`,
                        display: `inline-block`,
                        width: `2rem`,
                        borderRight: `1px black solid`,
                        paddingRight: `1rem`,
                        marginRight: `1rem`,
                        pointerEvents: `none`,
                        userSelect: `none`,
                      },
                    }}
                  ></div>
                  <div
                    sx={{
                      pl: 3,
                    }}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </div>
              )
            })}
          </pre>
          <div
            sx={{
              position: `absolute`,
              top: 0,
              right: 0,
              backgroundColor: `dimgrey`,
              px: 2,
              borderBottomLeftRadius: `lg`,
              fontSize: `small`,
            }}
          >
            {languages.get(language) || language.toUpperCase()}
          </div>
        </div>
      )}
    </Highlight>
  )
}
