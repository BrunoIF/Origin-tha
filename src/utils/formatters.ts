import { NOT_NUMBER_PARSEABLE } from './constants';

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

export function formatDecimal(value: number | string): string {
  const valueToNumber = Number(value);
  if (!valueToNumber) throw new Error(NOT_NUMBER_PARSEABLE);

  const decimalNumber = new Intl.NumberFormat('en-US').format(valueToNumber);

  if (!decimalNumber.includes('.')) return decimalNumber;

  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(
    valueToNumber
  );
}
