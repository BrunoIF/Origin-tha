import { MOBILE_BREAKPOINT } from './constants';

export function sanitizeNumber(value: string): number {
  const sanitized = value.replace(/\D+/g, '');

  return Number(sanitized);
}

export function isMobile(): boolean {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}
