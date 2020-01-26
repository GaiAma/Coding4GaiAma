/** @jsx jsx */
import { jsx, useColorMode, useThemeUI } from 'theme-ui'
import { Link } from 'components/Link'
import { Box, Button, Flex } from '@theme-ui/components'

// const modes = [`pineapple`, `watermelon`]
// const modeLabels = {
//   pineapple: `Pineapple`,
//   dark: `TOdo`,
//   watermelon: `Watermelon`,
//   papaya: `Papaya`,
// }

// type Props = {
//   title: string,
//   subtitle: string,
//   homepage: {
//     fields: {
//       url: string,
//     },
//   },
// }

export const Header = ({ title, subtitle, homepage, ...props }) => {
  const [mode, setMode] = useColorMode()
  const { theme } = useThemeUI()
  // console.log(JSON.stringify(theme))
  const modes = [`dark`, ...Object.keys(theme.colors.modes)]

  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return !homepage ? null : (
    <Box as="header" sx={{ backgroundColor: `background2`, mb: 10 }} {...props}>
      <Flex
        mx="auto"
        sx={{
          justifyContent: `space-between`,
          maxWidth: `34.8rem`,
        }}
      >
        {/* DONE: h2 doesn't work here (hmm [yale](https://usability.yale.edu/web-accessibility/articles/headings) says it's fine tho), probably don't use h heading at all [report](https://a11ygator.chialab.io/api/reports/3558756c-30be-43ae-8ba9-712936856953?format=html&ts=1578974823583) [nomensa](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#Nesting) */}
        <Box variant="styles.h5" mt={[3, 2]}>
          <Link
            variant="plain"
            sx={{ display: `block`, a: { color: `primary` } }}
            to={homepage.fields.url}
            active={false}
          >
            {title}
          </Link>
          {!!subtitle && <small /*sx={{ color: `muted` }}*/>{subtitle}</small>}
        </Box>
        <Box>
          <Button variant="slim" mt="2" onClick={cycleMode}>
            {/* {modeLabels[mode]} */}
            {mode}
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
