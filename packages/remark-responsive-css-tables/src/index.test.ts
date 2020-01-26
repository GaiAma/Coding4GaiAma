/// <reference path="../types/unist-util-remove-position/index.d.ts" />
import test, { ExecutionContext } from 'ava'
import remark from 'remark'
import u from 'unist-builder'
import removePosition from 'unist-util-remove-position'
import { remarkResponsiveCssTables as plugin, NodeWithHprops } from './index'

const clearTerminal = () => process.stdout.write('\x1B[2J\x1B[3J\x1B[H\x1Bc')

test.before((t: ExecutionContext) => {
  clearTerminal()
})

const table1 = {
  input: `
| Column 1 | Column 2 |
| -------- | -------- |
| Row 1    | Row 1    |
`,
  expected: u('root', [
    u(
      'table',
      {
        align: [null, null],
        data: { hProperties: { headers: ['Column 1', 'Column 2'] } },
      },
      [
        u('tableRow', [
          u('tableCell', [{ type: 'text', value: 'Column 1' }]),
          u('tableCell', [{ type: 'text', value: 'Column 2' }]),
        ]),
        u('tableRow', [
          u('tableCell', [{ type: 'text', value: 'Row 1' }]),
          u('tableCell', [{ type: 'text', value: 'Row 1' }]),
        ]),
      ]
    ),
  ]),
}

test('includes headers array', (t: ExecutionContext) => {
  const actual = removePosition(
    remark()
      .use(plugin)
      .runSync(remark().parse(table1.input)),
    true
  ) as NodeWithHprops
  t.deepEqual(actual, table1.expected, 'message?')
  // if (!Array.isArray(actual.children)) {
  //   return t.fail('missing children')
  // }
  // t.is(
  //   true,
  //   actual.children[0].data.hProperties.headers.includes('Column 1'),
  //   'headers includes Column 1'
  // )
  // t.is(
  //   true,
  //   actual.children[0].data.hProperties.headers.includes('Column 2'),
  //   'headers includes Column 2'
  // )
})

/* expected AST
{
  "type": "root",
  "children": [
    {
      "type": "table",
      "align": [
        null,
        null
      ],
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Column 1"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Column 2"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Row 1"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Row 1"
                }
              ]
            }
          ]
        },
      ],
      "data": {
        "hProperties": {
          "headers": [
            "Column 1",
            "Column 2"
          ]
        }
      }
    }
  ]
}
*/
