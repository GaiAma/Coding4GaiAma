declare module 'hast-util-is-element' {
  import { Node, Literal } from 'unist'
  type NodeWithChildren = Node & {
    children?: Node[]
    value?: string
  }
  export default function isElement(
    node: NodeWithChildren,
    tagNames: string | string[]
  ): NodeWithChildren
}
