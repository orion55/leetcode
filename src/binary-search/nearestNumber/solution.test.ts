import { describe, expect, test } from '@jest/globals';

import { nearestNumber } from './solution01';

describe('Test nearestNumber program', () => {
  test('Test with 3 synonym pairs', () => {
    const input = `5
1 2 3 4 5
6`;
    const output = nearestNumber(input);
    expect(output).toBe('5');
  });

  test('Test with synonym not found', () => {
    const input = `5
5 4 3 2 1
3`;
    const output = nearestNumber(input);
    expect(output).toBe('3');
  });
});
