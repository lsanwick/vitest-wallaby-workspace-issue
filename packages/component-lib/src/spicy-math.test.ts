import { describe, expect, it } from 'vitest';
import { spicyAdd } from './spicy-math';

describe('spicyAdd', () => {
  it('returns the sum of two numbers with "SPICY!" prefix', () => {
    expect(spicyAdd(1, 2)).toBe('SPICY! 3');
    expect(spicyAdd(5, 10)).toBe('SPICY! 15');
    expect(spicyAdd(-3, 7)).toBe('SPICY! 4');
  });
});
