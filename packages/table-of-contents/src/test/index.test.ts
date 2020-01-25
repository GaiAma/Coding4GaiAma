import test, { ExecutionContext } from 'ava'
import { toc /*, lastItem, modifyLast*/ } from '../index'
import * as testCases from './data'

const clearTerminal = () => process.stdout.write('\x1B[2J\x1B[3J\x1B[H\x1Bc')

test.before((t: ExecutionContext) => {
  clearTerminal()
})

for (const testCase in testCases) {
  test(testCase, (t: ExecutionContext) => {
    const result = toc(testCases[testCase].input)
    t.deepEqual(result, testCases[testCase].expected)
  })
}

// test.skip('last item case 1', (t: ExecutionContext) => {
//   const result = lastItem(case1.input)
//   const expected = { depth: 2, title: 'Child 6', url: '#child-6' }
//   t.deepEqual(result, expected)
// })

// test.skip('modify item case 1', (t: ExecutionContext) => {
//   const replacement = { depth: 3, title: 'Replaced', url: '#replaced' }
//   const expected = [
//     { depth: 1, title: 'Root', url: '#root', children: [] },
//     { depth: 2, title: 'Child 1', url: '#child-1', children: [] },
//     { depth: 2, title: 'Child 2', url: '#child-2', children: [] },
//     {
//       depth: 2,
//       title: 'Child 3',
//       url: '#child-3',
//       children: [
//         { depth: 3, title: 'Child 3.1', url: '#child-3-1', children: [] },
//         { depth: 3, title: 'Child 3.2', url: '#child-3-2', children: [] },
//         { depth: 3, title: 'Child 3.3', url: '#child-3-3', children: [] },
//         { depth: 3, title: 'Child 3.4', url: '#child-3-4', children: [] },
//         { depth: 3, title: 'Child 3.5', url: '#child-3-5', children: [] },
//         { depth: 3, title: 'Child 3.6', url: '#child-3-6', children: [] },
//         { depth: 3, title: 'Child 3.7', url: '#child-3-7', children: [] },
//         { depth: 3, title: 'Replaced', url: '#replaced', children: [] },
//       ],
//     },
//   ]
//   const result = modifyLast(case2.input, replacement)
//   console.log(result)
//   t.deepEqual(result, expected)
// })
