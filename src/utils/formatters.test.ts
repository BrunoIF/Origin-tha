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

  test('Returns the provided value if the value is not a number', () => {
    const input = 'abc';
    const result = formatCurrency(input);

    expect(result).toEqual(input);
  });
});

describe('formatters/formatDecimal', () => {
  test('Formats to two decimal places', () => {
    const result = formatDecimal(1000.1);

    // eslint-disable-next-line prettier/prettier
    expect(result).toEqual(1000.10);
  });

  test('Returns the provided value if the value is not a number', () => {
    const input = 'abc';
    const result = formatDecimal(input);

    expect(result).toEqual(input);
  });
});
