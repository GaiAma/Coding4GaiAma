/// <reference types="mdast-util-to-string" />
import { Node } from 'unist'
import visit from 'unist-util-visit'
import toString from 'mdast-util-to-string'
import { truncateMiddle } from 'autolinker/dist/commonjs/truncate/truncate-middle.js'
import { truncateSmart } from 'autolinker/dist/commonjs/truncate/truncate-smart.js'
import { truncateEnd } from 'autolinker/dist/commonjs/truncate/truncate-end.js'

enum Style {
  Smart = 'smart',
  Middle = 'middle',
  End = 'end',
}

type Props = {
  style?: Style
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
  [Style.Smart]: truncateSmart,
  [Style.Middle]: truncateMiddle,
  [Style.End]: truncateEnd,
}

export function remarkTruncateLinks({
  style = Style.Smart,
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
      const value = toString(node)
      if (value === node.url) {
        node.children = [
          { type: 'text', value: truncator(value, length, `...`) },
        ]
      }
    })
  }
}
