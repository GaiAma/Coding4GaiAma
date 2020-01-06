// https://stackoverflow.com/a/42702089/3484824
// http://blog.wolksoftware.com/contributing-to-definitelytyped

declare module 'mdast-util-to-string' {
  import { Node } from 'unist'
  export default function toString(node: Node): string
}
