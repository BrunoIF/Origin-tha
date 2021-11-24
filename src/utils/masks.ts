export function maskCurrency(value: string): string {
  const sanitized = value.replace(/[,.]/g, '');

  if (!Number(sanitized)) return value;

  const numberValue = Number(sanitized).toString();

  const inverted = numberValue
    .slice(0, numberValue.length - 2)
    .split('')
    .reverse()
    .join('');
  const decimals = numberValue.slice(-2);
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
