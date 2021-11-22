import { sanitizeNumber } from './utils';

export function maskNumber(value: string): string {
  const sanitized = typeof value === 'string' ? sanitizeNumber(value) : value;
  console.log(`sanitized`, sanitized);
  const valueToNumber = Number(sanitized);

  if (!valueToNumber) return value;

  return Number(sanitized).toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
}

export function maskNumberV2(value: string): string {
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
    if (i / 3 === 1) {
      maskedValue = `${maskedValue},${inverted[i]}`;
      continue;
    }

    maskedValue = `${maskedValue}${inverted[i]}`;
  }

  return maskedValue.split('').reverse().join('') + `.${decimals}`;

  // const decimals = sanitized.slice(-2);
  // console.log('decimals', decimals);
  // const full = sanitized.substr(0, sanitized.length - 2);

  // return `${new_value}.${decimals}`;
}
