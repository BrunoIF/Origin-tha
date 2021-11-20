import { NOT_NUMBER_PARSEABLE } from './constants';
import { maskCurrency, maskDecimal } from './masks';

describe('masks/maskCurrency', () => {
  test('Masks the value correctly', () => {
    const result = maskCurrency('1000');

    expect(result).toEqual('1,000.00');
  });

  test('Masks the value correctly with decimal places', () => {
    const result = maskCurrency('1000.500');

    expect(result).toEqual('1,000.50');
  });

  test('Throws an error if provided value is not parseable to Number', () => {
    const result = () => maskCurrency('a');

    expect(result).toThrow(NOT_NUMBER_PARSEABLE);
  });
});

describe('masks/maskDecimal', () => {
  test('Does not add unnecessary decimal places', () => {
    const result = maskDecimal(1000);

    expect(result).toEqual('1,000');
  });

  test('Masks to two decimal places', () => {
    const result = maskDecimal(1000.1);

    expect(result).toEqual('1,000.10');
  });

  test('Throws an error if provided value is not parseable to Number', () => {
    const result = () => maskDecimal('a');

    expect(result).toThrow(NOT_NUMBER_PARSEABLE);
  });
});
