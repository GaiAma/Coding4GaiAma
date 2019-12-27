/** @jsx jsx */
import { jsx } from 'theme-ui'
import TwitterShareButton from 'react-share/lib/TwitterShareButton'
import FacebookShareButton from 'react-share/lib/FacebookShareButton'
import EmailShareButton from 'react-share/lib/EmailShareButton'
import { Flex } from '@theme-ui/components'

// type Props = {
//   title: string,
//   twitterHandle: string,
//   url: string,
//   emailBody: string,
//   className: string,
//   onClick: Function,
// }

export const ShareButtons = ({
  title,
  twitterHandle,
  url,
  emailBody,
  onClick,
  ...props
}) => {
  return (
    <Flex sx={{ variant: `text.small`, alignItems: `center` }} {...props}>
      <div
        sx={{
          width: `100%`,
          borderWidth: 0,
          borderTopWidth: `1px`,
          borderStyle: `solid`,
          borderColor: `#a0aec0`,
        }}
      />
      <span sx={{ fontSize: 2, ml: 2 }}>Share</span>
      <TwitterShareButton
        title={title}
        via={twitterHandle}
        url={url}
        sx={{ cursor: `pointer`, variant: `links.plain`, ml: 2, flexShrink: 0 }}
        openWindow={true}
        // onClick={onClick}
      >
        Twitter
      </TwitterShareButton>

      <FacebookShareButton
        quote={title}
        url={url}
        sx={{ cursor: `pointer`, variant: `links.plain`, ml: 2, flexShrink: 0 }}
        openWindow={true}
        // onClick={onClick}
      >
        Facebook
      </FacebookShareButton>

      <EmailShareButton
        subject={title}
        body={emailBody}
        url={url}
        sx={{ cursor: `pointer`, variant: `links.plain`, ml: 2, flexShrink: 0 }}
        openWindow={true}
        // onClick={onClick}
      >
        E-Mail
      </EmailShareButton>
    </Flex>
  )
}
