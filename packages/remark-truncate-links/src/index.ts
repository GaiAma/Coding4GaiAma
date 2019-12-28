import { Node } from 'unist'
import visit from 'unist-util-visit'
import { truncateMiddle } from 'autolinker/dist/commonjs/truncate/truncate-middle.js'
import { truncateSmart } from 'autolinker/dist/commonjs/truncate/truncate-smart.js'

type Props = {
  style?: string
  length?: number
}

type NodeWithChildren = Node & {
  children?: Node[]
  value?: string
}

type TruncateStyle = {
  [key: string]: (
    url: string,
    truncateLen: number,
    ellipsisChars?: string
  ) => string
}

const truncators: TruncateStyle = {
  smart: truncateSmart,
  middle: truncateMiddle,
}

export function remarkTruncateLinks({
  style = `smart`,
  length = 30,
}: Props = {}): (ast: NodeWithChildren) => void {
  const truncator = truncators[style]

  if (typeof truncator !== `function`) {
    const supportedStyles = Object.keys(truncators).join(`, `)
    throw new Error(
      `Please select one of the supported styles [${supportedStyles}]`
    )
  }

  return function(ast: NodeWithChildren): void {
    visit(ast, 'link', (node: NodeWithChildren) => {
      node.title = node.title || node.url
      node.children?.map((child: NodeWithChildren): void => {
        if (typeof child?.value === `string` && child.value === node.url) {
          child.value = truncator(child.value, length, `...`)
        }
      })
    })
  }
}
