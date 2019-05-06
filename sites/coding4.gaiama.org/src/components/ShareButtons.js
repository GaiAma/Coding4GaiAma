// @flow
import React from 'react'
import TwitterShareButton from 'react-share/lib/TwitterShareButton'
import FacebookShareButton from 'react-share/lib/FacebookShareButton'
import EmailShareButton from 'react-share/lib/EmailShareButton'
import nano from 'nanostyled'

const Wrapper = nano(`div`, {
  base: `flex text-sm justify-between items-center`,
})

type Props = {
  title: string,
  twitterHandle: string,
  url: string,
  emailBody: string,
  className: string,
  onClick: Function,
}

const ShareButtons = ({
  title,
  twitterHandle,
  url,
  emailBody,
  onClick,
  className,
  ...props
}: Props) => {
  return (
    <Wrapper className={className}>
      <div className="border-0 border-solid border-t border-gray-500 w-full" />
      <span className="text-sm text-gray-500 font-semibold ml-2">Share</span>
      <TwitterShareButton
        title={title}
        via={twitterHandle}
        url={url}
        className="cursor-pointer hover:text-blue-600 ml-2 flex-shrink-0"
        openWindow={true}
        // onClick={onClick}
      >
        Twitter
      </TwitterShareButton>

      <FacebookShareButton
        quote={title}
        url={url}
        className="cursor-pointer hover:text-blue-600 ml-2 flex-shrink-0"
        openWindow={true}
        // onClick={onClick}
      >
        Facebook
      </FacebookShareButton>

      <EmailShareButton
        subject={title}
        body={emailBody}
        url={url}
        className="cursor-pointer hover:text-blue-600 ml-2 flex-shrink-0"
        openWindow={true}
        // onClick={onClick}
      >
        E-Mail
      </EmailShareButton>
    </Wrapper>
  )
}

export default ShareButtons
