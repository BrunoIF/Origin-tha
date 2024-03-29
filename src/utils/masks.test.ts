import { maskCurrency } from './masks';

describe('masks/maskCurrency', () => {
  test('Masks the value correctly for 11 digits', () => {
    const result = maskCurrency('12345678910');

    expect(result).toEqual('123,456,789.10');
  });

  test('Masks the value correctly for 7 digits', () => {
    const result = maskCurrency('1234567');

    expect(result).toEqual('12,345.67');
  });

  test('Masks the value correctly for 5 digits', () => {
    const result = maskCurrency('12345');

    expect(result).toEqual('123.45');
  });

  test('Masks the value correctly for 4 digits', () => {
    const result = maskCurrency('1234');
    expect(result).toEqual('12.34');
  });

  test('Applies mask with decimal places', () => {
    const result = maskCurrency('1234,56');

    expect(result).toEqual('1,234.56');
  });

  test('Removes insignificant zeros', () => {
    const result = maskCurrency('00012340');

    expect(result).toEqual('123.40');
  });

  test('Returns the provided value if input is not number', () => {
    const input = 'abc';
    const result = maskCurrency(input);

    expect(result).toEqual(input);
  });
});
