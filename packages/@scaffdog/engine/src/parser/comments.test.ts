import { expect, test } from 'vitest';
import { createComment } from '../ast';
import { comment } from './comments';
import type { ParserTestEntry } from './test-utils';
import { parse, result } from './test-utils';

test.each<ParserTestEntry>([
  ['success', '/**/', createComment('', [0, 3]), '', 4, true, []],
  ['success', '/* abc */', createComment(' abc ', [0, 8]), '', 9, true, []],
  ['success', '/**abc*/', createComment('*abc', [0, 7]), '', 8, true, []],
  ['success', '/*abc**/', createComment('abc*', [0, 7]), '', 8, true, []],
  ['success', '/*/*abc*/', createComment('/*abc', [0, 8]), '', 9, true, []],
  [
    'success',
    '/*\na\nb\nc*/',
    createComment('\na\nb\nc', [0, 9]),
    '',
    10,
    true,
    [],
  ],
  ['error', '', '', 0, false, []],
  ['error', '/', '/', 0, false, []],
])('comment - %s %s', (...args) => {
  expect(parse(comment, args[1])).toEqual(result(...args));
});
