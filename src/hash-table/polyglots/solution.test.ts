import { describe, expect, test } from '@jest/globals';

import { polyglots } from './solution';

describe('Test polyglots program', () => {
  test('Test with 3 synonym pairs', () => {
    const input = `3
3
Russian
English
Japanese
2
Russian
English
1
English`;
    const output = polyglots(input);
    expect(output).toBe(`1
English
3
Russian
English
Japanese`);
  });
});
