type opts = {
  footnotes?: boolean
  remarkPlugins?: any[]
  rehypePlugins?: any[]
  compilers?: any[]
}

declare module '@mdx-js/mdx' {
  export default function compile(mdx: string, options?: opts): string
}
