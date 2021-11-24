export function maskCurrency(value: string): string {
  const sanitized = value.replace(/[,.]/g, '');

  if (!Number(sanitized)) return value;

  const inverted = sanitized
    .slice(0, sanitized.length - 2)
    .split('')
    .reverse()
    .join('');
  const decimals = sanitized.slice(-2);
  let maskedValue = '';

  for (let i = 0; i < inverted.length; i++) {
    if (i && i % 3 === 0) {
      maskedValue = `${maskedValue},${inverted[i]}`;
      continue;
    }

    maskedValue = `${maskedValue}${inverted[i]}`;
  }

  return maskedValue.split('').reverse().join('') + `.${decimals}`;
}
