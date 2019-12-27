import { Node } from 'unist'
import visit from 'unist-util-visit'
import { truncateMiddle } from 'autolinker/dist/commonjs/truncate/truncate-middle.js'

type NodeWithChildren = Node & {
  children?: Node[]
  value?: string
}

export function remarkTruncateLinks(): (ast: NodeWithChildren) => void {
  return function(ast: NodeWithChildren): void {
    visit(ast, 'link', (node: NodeWithChildren) => {
      node.title = node.title || node.url
      node.children?.map((child: NodeWithChildren): void => {
        if (typeof child?.value === `string` && child.value === node.url) {
          child.value = truncateMiddle(child.value, 30, `...`)
        }
      })
    })
  }
}
