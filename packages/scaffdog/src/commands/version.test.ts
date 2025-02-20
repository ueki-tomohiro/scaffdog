import { expect, test } from 'vitest';
import { runCommand } from '../mocks/command-test-utils';
import cmd from './version';

const defaults = {
  args: {},
  flags: {},
};

test('version', async () => {
  const { code, stdout } = await runCommand(cmd, defaults.args, defaults.flags);

  expect(code).toBe(0);

  expect(stdout).toBe('v1.0.0\n');
});
