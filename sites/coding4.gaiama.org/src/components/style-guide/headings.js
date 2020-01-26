/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Heading, Box } from '@theme-ui/components'

export const Headings = ({ levels, previewTexts }) => {
  const { theme } = useThemeUI()
  const styles = levels.reduce(
    (obj, key) => ({ ...obj, [key]: theme.styles[key] }),
    {}
  )
  const preview = Object.entries(styles).map(([key, style]) => (
    <Box key={key}>
      <Heading as={key} sx={style}>
        {previewTexts[key]}
      </Heading>
    </Box>
  ))

  return <Box>{preview}</Box>
}
