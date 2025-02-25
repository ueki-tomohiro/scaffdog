import path from 'path';
import type yargs from 'yargs';
import type { CommandModule, CommandOption } from '../command';
import { CommandContainer } from '../command-container';
import { createLogger } from './logger';

export const cwd = path.resolve(__dirname, '../../');

export const runCommand = async <
  A extends CommandOption,
  F extends CommandOption,
>(
  cmd: CommandModule<A, F>,
  args: yargs.InferredOptionTypes<A>,
  flags: yargs.InferredOptionTypes<F>,
  container: CommandContainer | null = null,
): Promise<{
  code: number;
  stdout: string;
  stderr: string;
}> => {
  const { logger, getStdout, getStderr } = createLogger();

  const code = await cmd.run({
    cwd,
    pkg: {
      name: 'scaffdog',
      version: '1.0.0',
      description: 'scaffdog is Markdown driven scaffolding tool.',
    },
    size: {
      rows: 120,
      columns: 60,
    },
    logger,
    container: container ?? new CommandContainer([]),
    args,
    flags: {
      project: 'fixtures',
      help: false,
      version: false,
      verbose: true,
      ...flags,
    },
  });

  return {
    code,
    stdout: getStdout(),
    stderr: getStderr(),
  };
};
