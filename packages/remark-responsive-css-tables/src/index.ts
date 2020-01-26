/// <reference types="mdast-util-to-string" />
import { Node } from 'unist';
import visit from 'unist-util-visit';
import toString from 'mdast-util-to-string';

export type Props = {};

export type NodeWithChildren = Node & {
  children?: Node[];
};

export type NodeWithHprops = Node & {
  data?: {
    hProperties?: {
      headers: string[];
    };
  };
};

/**
 * FIXME: find better package name? like remark-table-header-props?
 */

const visitor = (
  node: NodeWithChildren,
  index: number,
  parent: NodeWithHprops
) => {
  // only interested in first row = table headings
  if (!(index === 0 && node.children)) {
    return;
  }

  // init hProperties.headers without overriding anything
  if (parent.data) {
    parent.data.hProperties = parent.data.hProperties ?? { headers: [] };
  } else {
    parent.data = { hProperties: { headers: [] } };
  }

  node.children.forEach((header: Node) => {
    parent.data?.hProperties?.headers?.push(toString(header));
  });
};

export const remarkResponsiveCssTables = ({}: Props = {}) => (
  ast: NodeWithChildren
) => visit(ast, 'tableRow', visitor);
