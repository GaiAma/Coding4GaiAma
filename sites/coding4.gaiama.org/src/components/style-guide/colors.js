/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Box } from '@theme-ui/components'
// import { rgb, hex } from 'wcag-contrast'
import colorable from 'colorable'

/**
 * https://www.gatsbyjs.org/guidelines/color/
 * https://github.com/gatsbyjs/gatsby/blob/master/www/src/utils/guidelines/color.js
 * https://github.com/tmcw/wcag-contrast
 */

const getColorCodes = colorObject =>
  Object.keys(colorObject).reduce((result, key) => {
    if (key === 'modes') {
      getColorCodes(colorObject[key])
    } else {
      result.push(colorObject[key])
    }
    return result
  }, [])

export const Colors = ({ ...props }) => {
  const { theme } = useThemeUI()
  console.log(theme.colors)
  const colorCodes = getColorCodes(theme.colors)

  console.log(
    colorable(colorCodes, { compact: true, threshold: 0, uniq: true })
  )
  console.log({ colorCodes })

  // const preview = Object.entries(styles).map(([key, style]) => (
  //   <Box key={key}>colorCodes</Box>
  // ))

  return <Box>preview</Box>
}
