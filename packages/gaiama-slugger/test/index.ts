import test, { ExecutionContext } from 'ava';
import { slugify } from '../src';

const clearTerminal = () => process.stdout.write('\x1B[2J\x1B[3J\x1B[H\x1Bc');

test.before(() => {
  if (process.env.npm_config_argv.includes('watch')) {
    clearTerminal();
  }
});

test('basics', (t: ExecutionContext) => {
  slugify.reset();
  t.is(slugify('ä umlaut'), 'ae-umlaut');
  t.is(slugify('foo'), 'foo');
  t.is(slugify('foo bar'), 'foo-bar');
  t.is(slugify('<html/>'), 'html');
  t.is(slugify('__proto__'), 'proto');
  t.is(slugify('hasOwnProperty', { lowercase: false }), 'hasOwnProperty');
  t.is(slugify('GaiAma'), 'gaiama', `ensure GaiAma won't be decamelized`);
});

test('handles duplicates', (t: ExecutionContext) => {
  slugify.reset();
  t.is(slugify('foo'), 'foo');
  t.is(slugify('foo'), 'foo-2');
  t.is(slugify('foo 1'), 'foo-1');
  t.is(slugify('foo-1'), 'foo-1-2');
  t.is(slugify('foo-1'), 'foo-1-3');
  t.is(slugify('foo'), 'foo-3');
  t.is(slugify('foo'), 'foo-4');
  t.is(slugify('foo-1'), 'foo-1-4');
  t.is(slugify('foo-2'), 'foo-2-1'); // or foo-2-2 ??
  t.is(slugify('foo-2'), 'foo-2-2');
  t.is(slugify('foo-2-1'), 'foo-2-1-1');
  t.is(slugify('foo-2-1'), 'foo-2-1-2');
  t.is(slugify('foo-11'), 'foo-11-1');
  t.is(slugify('foo-111'), 'foo-111-1');
  t.is(slugify('foo-111-1'), 'foo-111-1-1');
  // does that check for ReDoS? Probably not really 😅
  t.is(
    slugify(
      'foo-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-X'
    ),
    'foo-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-x'
  );
});

test('handles duplicates with varying case', (t: ExecutionContext) => {
  slugify.reset();
  t.is(slugify('fooCamelCase', { lowercase: false }), 'fooCamelCase');
  t.is(slugify('fooCamelCase'), 'foocamelcase-2');
});
