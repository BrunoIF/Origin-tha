export function sanitizeNumber(value: string): number {
  const sanitized = value.replace(/\D+/g, '');

  return Number(sanitized);
}
