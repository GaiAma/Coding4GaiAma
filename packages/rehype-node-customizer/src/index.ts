/// <reference types="hast-util-whitespace" />
import { Node } from 'unist';
import { ActionTuple } from 'unist-util-visit-parents';
import visit from 'unist-util-visit';
import is, { TestFunction } from 'unist-util-is';
import whitespace from 'hast-util-whitespace';
export const isWhitespaceNode = whitespace;
// type Opaque<K, T> = T & { __TYPE__: K }

export type Properties = {
  [key: string]: string;
};

export type NodeWithChildren = Node & {
  children?: NodeWithChildren[];
  value?: string;
  properties?: Properties;
};

export type NodeWithValue = Node & {
  value: string;
};

export type NodeWithTagName = Node & {
  tagName?: string;
};

export type CustomizerFn = (props: {
  node: Node;
  cleanChildren: Node[];
  childrenCount: number;
}) => Node;

export type TypeSelector = {
  [key: string]: any;
};

export type TypesType =
  | TypeSelector[]
  | TypeSelector
  | TestFunction<NodeWithChildren>
  | string;

export type Options = {
  className?: string;
  childrenTypes?: TypesType;
  parentTypes?: TypesType;
  customizer?: CustomizerFn;
};

export const defaultOptions = {
  className: '',
  childrenTypes: { tagName: 'figure' },
  parentTypes: { tagName: 'p' },
};

export const isLineBreak = (x: Node) => x.tagName === 'br';
export const notIsWhitespaceOrLineBreak = (x: Node) =>
  !(isLineBreak(x) || whitespace(x));

export const rehypeNodeCustomizer = (options: Options = defaultOptions) => (
  ast: Node
) => {
  const opts = { ...defaultOptions, ...options };

  const isOfSpecifiedType = (x: Node) => is(x, opts.childrenTypes);

  const visitor = (
    node: NodeWithChildren,
    index: number,
    parent: NodeWithChildren
  ): ActionTuple | void => {
    const childrenCount = node.children?.length;
    if (!is(node, opts.parentTypes) || !childrenCount) return;

    const children = node.children?.filter(notIsWhitespaceOrLineBreak);
    if (!children?.every(isOfSpecifiedType)) return;

    node.properties = { ...node.properties };

    if (opts.className) {
      node.properties.class = node.properties.class
        ? `${node.properties.class} ${opts.className}`
        : opts.className;
    }

    if (parent?.children?.length && typeof opts.customizer === 'function') {
      parent.children[index] = opts.customizer({
        node,
        cleanChildren: children,
        childrenCount,
      });
    }

    return [visit.SKIP, index + 1];
  };

  visit(ast, visitor);

  return ast;
};
