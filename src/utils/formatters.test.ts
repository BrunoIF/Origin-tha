import { NOT_NUMBER_PARSEABLE } from './constants';
import { formatCurrency, formatDecimal } from './formatters';

describe('formatters/formatCurrency', () => {
  test('Formats the value correctly', () => {
    const result = formatCurrency('1000');

    expect(result).toEqual('1,000.00');
  });

  test('Formats the value correctly with decimal places', () => {
    const result = formatCurrency('1000.500');

    expect(result).toEqual('1,000.50');
  });

  test('Throws an error if provided value is not parseable to Number', () => {
    const result = () => formatCurrency('a');

    expect(result).toThrow(NOT_NUMBER_PARSEABLE);
  });
});

describe('formatters/formatDecimal', () => {
  test('Formats to two decimal places', () => {
    const result = formatDecimal(1000.1);

    // eslint-disable-next-line prettier/prettier
    expect(result).toEqual(1000.10);
  });

  test('Throws an error if provided value is not parseable to Number', () => {
    const result = () => formatDecimal('a');

    expect(result).toThrow(NOT_NUMBER_PARSEABLE);
  });
});
