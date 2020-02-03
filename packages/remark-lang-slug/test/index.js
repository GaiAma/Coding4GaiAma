const test = require('ava');
const remark = require('remark');
const unwrapImages = require('remark-unwrap-images');
const removePosition = require('unist-util-remove-position');
const remarkLangSlug = require('../');
const md = str =>
  removePosition(
    remark()
      .use(remarkLangSlug)
      .use(unwrapImages)
      .runSync(remark().parse(str)),
    true
  );

const cases = [
  {
    input: '# <Link/> a universal gatsby-link wrapper',
    expected: 'link-a-universal-gatsby-link-wrapper',
  },
  {
    input: '# GaiAma - saving and restoring amazonian rainforest',
    expected: 'gaiama-saving-and-restoring-amazonian-rainforest',
  },
  {
    input:
      '| Column 1 | Column 2 |\n| -------- | -------- |\n| Row 1    | Row 1    |',
    expected: 'figure',
  },
  {
    input: '![alt](./image.jpg)',
    expected: 'figure',
  },
];

const clearTerminal = () => process.stdout.write('\x1B[2J\x1B[3J\x1B[H\x1Bc');
test.before(() => {
  clearTerminal();
});

test('Adds correct slug based on type', t => {
  cases.forEach(x => {
    remarkLangSlug.reset();
    const expected = md(x.input);
    t.is(expected.children[0].id, x.expected);
  });
});

test('handles duplicates', t => {
  remarkLangSlug.reset();
  const expected = md('![alt](./image.jpg)![alt](./image.jpg)');
  t.is('figure', expected.children[0].id);
  t.is('figure-2', expected.children[1].id);
});
