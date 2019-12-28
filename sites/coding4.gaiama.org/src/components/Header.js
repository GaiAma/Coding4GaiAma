/** @jsx jsx */
import { jsx, useColorMode, useThemeUI } from 'theme-ui'
import { Link } from 'components/Link'
import { Heading, Box, Button, Flex } from '@theme-ui/components'

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
    <Box sx={{ backgroundColor: `background2` }}>
      <Flex
        mx="auto"
        sx={{
          justifyContent: `space-between`,
          maxWidth: `34.8rem`,
        }}
      >
        <Heading as="h2" mt={[3, 2]} {...props}>
          <Link
            variant="plain"
            sx={{ display: `block`, a: { color: `primary` } }}
            to={homepage.fields.url}
            active={false}
          >
            {title}
          </Link>
          {!!subtitle && <small /*sx={{ color: `muted` }}*/>{subtitle}</small>}
        </Heading>
        <Box
          sx={{
            gridColumn: [null, null, null, `6/8`],
            position: [`absolute`, null, null, `static`],
            right: 0,
          }}
        >
          <Button variant="slim" mt="2" onClick={cycleMode}>
            {/* {modeLabels[mode]} */}
            {mode}
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
