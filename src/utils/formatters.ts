import { sanitizeNumber } from './utils';

export function formatCurrency(value: string | number): string {
  const valueToNumber = Number(value);
  if (!valueToNumber) return value.toString();

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
): number | string {
  const sanitized = typeof value === 'string' ? sanitizeNumber(value) : value;
  const valueToNumber = Number(sanitized);
  if (!valueToNumber) return value;

  return Number(valueToNumber.toFixed(decimalPlaces));
}
