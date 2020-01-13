// NOTE: post in https://stackoverflow.com/questions/25569255/find-and-modify-deeply-nested-object-in-javascript-array

type TocItem = {
  depth: number
  children: TocItem[]
}

/**
 * We wouldn't be able to enjoy a clean table of contents
 * without this magical piece of technology 🌌
 * which was generously broad to you by
 * the refined brain power of glorious sladwig (https://github.com/sladwig)
 */
export const toc = (items: Array<{ depth: number }> = []): TocItem[] => {
  const result: TocItem[] = []
  const tocItems: TocItem[] = items.map(each => ({ ...each, children: [] }))

  const bags = bagy(result)

  tocItems.forEach(bags.put)

  return result
}

const bagy = (result: TocItem[]) => {
  const bags = new Array(7)
  bags[0] = result

  const clearUpperBags = (depth: number) => {
    for (let j = depth; j <= 6; j++) {
      delete bags[j]
    }
  }
  const getBagAt = (depth: number) => {
    for (let i = depth; 0 <= i; i--) {
      if (bags[i]) {
        clearUpperBags(i + 1)
        return bags[i]
      }
    }
  }
  const setBagAt = (depth: number, bag: TocItem[]) => {
    bags[depth] = bag
  }

  return {
    put: (item: { depth: number; children: TocItem[] }) => {
      getBagAt(item.depth - 1).push(item)
      setBagAt(item.depth, item.children)
    },
  }
}

/**
 * TODO: get it somehow working 🤓
 */
export const tocRecursive = (
  items: Array<{ depth: number }> = [],
  result: TocItem[] = [],
  index: number = 0,
  lastDepth: number = -1
): TocItem[] => {
  if (index >= items.length) return result
  const item = { ...items[index], children: [] }
  const lastItem = result[result.length - 1]
  // if (item.title.startsWith('Child 5.')) {
  //   console.log('\n')
  //   console.log(index, lastDepth, item.depth, lastItem?.depth)
  //   console.log(JSON.stringify(item))
  // }
  if (result.length === 0) result.push(item)
  else if (
    lastDepth < item.depth
    // || (lastDepth === item.depth && (!lastItem || lastItem?.depth < item.depth))
  ) {
    // console.log('children', lastItem, item)
    result[result.length - 1].children = [
      ...lastItem.children,
      ...tocRecursive([item], lastItem.children, 0, item.depth),
    ]
  } else {
    result.push(item)
  }
  tocRecursive(items, result, index + 1, item.depth)
  return result
}

/**
 *
 * Old stuff for historical reasons
 * will be cleaned up soon
 *
 */

// type Heading = {
//   depth: number
//   url: string
//   title: string
// }

// type NestableHeading = Heading | { [k: string]: NestableHeading } | []

// interface Toc {
//   (heading: [Heading]): NestableHeading
// }

// export const lastItem = (nestedItems: any): any => {
//   const [last] = nestedItems.slice(-1)
//   if (last?.children?.length) {
//     return lastItem(last.children)
//   }
//   return last
// }

export const modifyLast = (items: any, replacement: any): any => {
  return items.reduceRight((acc: any, item: any): any => {
    if (item.children?.length) {
      modifyLast(item.children, replacement)
    }
    acc.splice(0, 1, replacement)
    return acc
  }, [])
}

// export const toc = (headings: any, lastDepth: any = null): any => {
//   const result: any = []
//   headings.forEach((item: any) => {
//     item.children = []
//     if (lastDepth !== null && lastDepth < item.depth) {
//       console.log('inne')
//       result.splice(-1, 1, {
//         ...result[result.length - 1],
//         children: toc(result[result.length - 1].children, lastDepth),
//       })
//     } else {
//       result.push(item)
//     }
//     lastDepth = item.depth
//   })
//   console.log(JSON.stringify(result, null, 2))
//   return result
// }

// const walker = (items: any = [], child: any, lastInsertDepth: number) => {}

// export const toc = (
//   items: any = [],
//   result: any = [],
//   index: number = 0,
//   lastInsertDepth?: number,
//   item?: any
// ): any => {
//   console.log('\n\n')
//   console.log(items, result, index, lastInsertDepth, item)
//   if (items.length <= index) return result
//   item = item || { ...items[index], children: [] }
//   if (!lastInsertDepth || item.depth === lastInsertDepth) {
//     result.push(item)
//   } else if (lastInsertDepth < item.depth) {
//     result.splice(-1, 1, {
//       ...result[result.length - 1],
//       children: toc(
//         result[result.length - 1].children,
//         result,
//         0,
//         lastInsertDepth,
//         item
//       ),
//     })
//   }
//   index = index + 1
//   return toc(items, result, index, item.depth)
// }

// export const toc = (
//   items: any = [],
//   lastInsertDepth: number = -1,
//   index: number = 0,
//   child: any = null
// ): any => {
//   const result: any = []
//   if (index >= items.length) return result
//   child = child || items[index]
//   child.children = []
//   const last = items[items.length - 1]
//   if (!last) {
//     console.log('!last')
//     result.push(child)
//   } else if (last?.depth === child.depth) {
//     console.log('last?.depth === child.depth', last.depth, child.depth)
//     result.push(child)
//     return result
//   } else if (lastInsertDepth < child.depth) {
//     console.log('lastInsertDepth < child.depth')
//     console.log(result)
//     result[result.length - 1].children = toc(
//       result[result.length - 1].children,
//       last.depth,
//       index + 1,
//       child
//     )
//   }
//   // console.log('\n', JSON.stringify(result, null, 2), '\n')
//   return toc(items, child.depth, index + 1)
// }
// export const toc = (
//   headings: any,
//   lastDepth: any = null,
//   child: any = null
// ): any => {
//   const result: any = []
//   headings.forEach((item: any) => {
//     item.children = []
//     const lastItem: any = result[result.length - 1]
//     if (item.title === 'Child 5.1' || item.title === 'Child 5.2') {
//       console.log('LOGGING', item.depth, lastDepth, lastItem.depth)
//     }

//     if (lastDepth !== null || lastDepth < item.depth) {
//       result.splice(-1, 1, {
//         ...lastItem,
//         children: toc(lastItem.children, lastDepth, item),
//       })
//     } else if (lastDepth === null || lastItem?.depth === item.depth) {
//       result.push(item)
//     } else {
//       if (lastDepth <= item.depth) {
//         // if (!lastItem.children.length) {
//         lastItem.children.push(item)
//         // }
//       } else {
//       }
//     }
//     lastDepth = item.depth
//   })
//   console.log(JSON.stringify(result, null, 2))
//   return result
// }
// export const toc = (headings: any): any => {
//   let lastDepth: any = null
//   return headings.reduce((acc: any, item: any) => {
//     item.children = []
//     if (lastDepth < item.depth) {
//       const last: any = lastItem(acc)
//       last.children = [...last.children, item]
//     } else {
//       acc.push(item)
//     }
//     lastDepth = item.depth
//     return acc
//   }, [])
// }

// export const toc = (headings: any) => {
//   let helper: any = []
//   let lastDepth: number = -1
//   const result = headings.reduceRight((acc: any, item: any, index: number) => {
//     if (item.depth > lastDepth) {
//       acc = helper.concat(acc)
//       helper = []
//       helper.unshift(item)
//     } else if (item.depth < lastDepth) {
//       item.children = item.children.concat(helper)
//       helper = [item]
//     } else {
//       helper.unshift(item)
//     }
//     console.log(
//       '\n\n',
//       JSON.stringify({ index, acc, lastDepth, depth: item.depth }, null, 2),
//       '\n\n'
//     )

//     if (index === 0) {
//       acc = helper.concat(acc)
//       helper = []
//     }

//     lastDepth = item.depth
//     return acc
//   }, [])
//   return result
// }
