// program.test.ts
import { describe, expect, test } from '@jest/globals';

import { processSynonyms } from './solution';

describe('Test synonym program', () => {
  test('Test with 3 synonym pairs', () => {
    const input = `3
Hello Hi
Bye Goodbye
List Array
Goodbye`;
    const output = processSynonyms(input);
    expect(output).toBe('Bye');
  });

  test('Test with synonym not found', () => {
    const input = `1
beep Car
Car`;
    const output = processSynonyms(input);
    expect(output).toBe('beep');
  });

  test('Test with 1 synonym pair', () => {
    const input = `2
Ololo Ololo
Numbers 1234567890
Numbers`;
    const output = processSynonyms(input);
    expect(output).toBe('1234567890');
  });

  test('Test with no synonym pairs', () => {
    const input = `0`;
    const output = processSynonyms(input);
    expect(output).toBe('Синоним не найден');
  });
});
