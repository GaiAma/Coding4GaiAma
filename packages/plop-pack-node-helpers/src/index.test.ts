import test, { ExecutionContext } from 'ava';
import plopPackNodeHelpers from './index';

const clearTerminal = () => process.stdout.write('\x1B[2J\x1B[3J\x1B[H\x1Bc');

test.before((t: ExecutionContext) => {
  if (process.env.npm_config_argv.includes('watch')) {
    clearTerminal();
  }
});

test('plop-pack-node-helpers', (t: ExecutionContext) => {});
