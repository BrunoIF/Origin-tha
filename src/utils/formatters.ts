import { NOT_NUMBER_PARSEABLE } from './constants';
import { sanitizeNumber } from './utils';

export function formatCurrency(value: string | number): string {
  const valueToNumber = Number(value);
  if (!valueToNumber) throw new Error(NOT_NUMBER_PARSEABLE);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
    .format(valueToNumber)
    .replace('$', '');
}

export function formatDecimal(
  value: number | string,
  decimalPlaces = 2
): number {
  const sanitized = typeof value === 'string' ? sanitizeNumber(value) : value;
  const valueToNumber = Number(sanitized);
  if (!valueToNumber) throw new Error(NOT_NUMBER_PARSEABLE);

  return Number(valueToNumber.toFixed(decimalPlaces));
}
