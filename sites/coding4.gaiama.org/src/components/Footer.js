/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'components/Link'
import { Box, Flex } from '@theme-ui/components'
import { DiGithubBadge } from 'react-icons/di'

// type SharedFields = {
//   id: string,
//   fields: { url: string },
//   frontmatter: { title: string },
// }

// type Props = {
//   menu: Array<SharedFields>,
//   additionalLinks: Array<SharedFields>,
// }

export const Footer = ({
  menu = [],
  additionalLinks = [],
  meta,
  editLink,
  ...props
}) =>
  !menu?.length ? null : (
    <Box mt="4" sx={{ backgroundColor: `background2` }}>
      <Box mx="auto" sx={{ maxWidth: `34.8rem` }}>
        <Flex sx={{ ml: -1 }}>
          {!!menu.length &&
            menu.map(m => (
              <div key={m.fields.url} sx={{ mx: 1 }}>
                <Link to={m.fields.url}>{m.frontmatter.title}</Link>
              </div>
            ))}
          {!!additionalLinks.length &&
            additionalLinks.map(m => (
              <div key={m.url} sx={{ px: 2 }}>
                <Link to={m.url}>{m.title}</Link>
              </div>
            ))}
        </Flex>

        <Flex mt="2">
          <Box>Version: {meta.version}</Box>
          <Box ml="2">Branch: {meta.branch}</Box>
          <Box ml="2">License: {meta.license}</Box>
          {editLink && (
            <Box ml="2">
              <Link variant="plain" to={editLink}>
                <DiGithubBadge />
                Source
              </Link>
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  )
