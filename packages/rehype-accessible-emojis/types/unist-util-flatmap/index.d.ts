declare module 'unist-util-flatmap' {
  import { Node, Literal } from 'unist'
  type NodeWithChildren = Node & {
    children?: Node[]
    value?: string
  }
  export default function flatMap(
    ast: NodeWithChildren,
    fn: (node: Literal, index?: number, parent?: Literal) => any
  ): NodeWithChildren
}
