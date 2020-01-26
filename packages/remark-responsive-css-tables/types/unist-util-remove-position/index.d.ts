// https://stackoverflow.com/a/42702089/3484824
// http://blog.wolksoftware.com/contributing-to-definitelytyped

declare module 'unist-util-remove-position' {
  import { Node } from 'unist'
  type NodeWithChildren = Node & {
    children?: Node[]
  }
  export default function removePosition(
    node: NodeWithChildren,
    force: boolean
  ): NodeWithChildren
}
