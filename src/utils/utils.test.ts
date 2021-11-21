import { sanitizeNumber } from './utils';

describe('utils/sanitizeNumber', () => {
  test('Returns only numbers', () => {
    const result = sanitizeNumber('123abc.,/#');

    expect(result).toEqual(123);
  });
});
