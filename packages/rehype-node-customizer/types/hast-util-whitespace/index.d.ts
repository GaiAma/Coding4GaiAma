declare module 'hast-util-whitespace' {
  import { Node, Literal } from 'unist';
  type NodeWithChildren = Node & {
    children?: Node[];
    value?: string;
  };
  export default function interElementWhiteSpace(node: Node): boolean;
}
