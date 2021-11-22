import { maskNumber, maskNumberV2 } from './masks';

describe.skip('masks/maskNumber', () => {
  test('Masks the value correctly', () => {
    const result = maskNumber('1000');
    expect(result).toEqual('1,000');
  });

  test('Applies mask with decimal places', () => {
    const result = maskNumber('1000,10');

    expect(result).toEqual('1,000.10');
  });

  test('Returns the provided value if mask cannot be applied', () => {
    const result = maskNumber('abc');

    expect(result).toEqual('abc');
  });
});

describe('masks/maskNumberV2', () => {
  test('Masks the value correctly', () => {
    const result = maskNumberV2('1234');
    expect(result).toEqual('12.34');
  });

  test('Applies mask with decimal places for 6 digits', () => {
    const result = maskNumberV2('1234,56');

    expect(result).toEqual('1,234.56');
  });

  test('Masks the value correctly for 7 digits', () => {
    const result = maskNumberV2('1234567');

    expect(result).toEqual('12,345.67');
  });

  test('Masks the value correctly for 5 digits', () => {
    const result = maskNumberV2('12345');

    expect(result).toEqual('123.45');
  });

  test('Returns the provided value if input is not number', () => {
    const input = 'abc';
    const result = maskNumberV2(input);

    expect(result).toEqual(input);
  });
});
