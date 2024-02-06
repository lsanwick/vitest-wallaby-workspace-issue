import { doStuff } from './stuff';
import { describe, it, expect } from 'vitest';

describe('doStuff', () => {
  it('should return the sum of 1 and 2', () => {
    const result = doStuff();
    expect(result).toBe("SPICY! 3");
  });
});
