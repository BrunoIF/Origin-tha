import { sanitizeNumber } from './utils';

export function maskNumber(value: string): string {
  if (!value) return '';

  const sanitizedValue = sanitizeNumber(value);

  return Number(sanitizedValue).toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
}
