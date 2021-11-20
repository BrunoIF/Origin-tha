export function maskNumber(value: string): string {
  if (!value) return '';

  const sanitizedValue = value.replace(/,/g, '');

  return Number(sanitizedValue).toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
}
