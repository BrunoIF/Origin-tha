import { maskNumber } from './masks';

describe('masks/maskNumber', () => {
  test('Masks the value correctly', () => {
    const result = maskNumber('1000');
    expect(result).toEqual('1,000');
  });
});
