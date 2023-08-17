import { clsx, type ClassValue } from 'clsx';
import millify from 'millify';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const now = new Date();
const localHour = now.getHours();

export function getUTCOffset() {
  const offsetMinutes = now.getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(offsetMinutes / 60));
  const offsetSign = offsetMinutes < 0 ? '+' : '-';

  return ` (UTC${offsetSign}${offsetHours})`;
}

// add commas to a number
export function formatDigits(number: number): string {
  // Convert to string with 2 decimal places
  const numberStr = number.toFixed(2);

  const parts = numberStr.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}

// format a tremor chart's data
export function formatData<T>(
  array: T[],
  type: string,
  lastValue?: number
): any[] {
  switch (type) {
    case 'price':
      return array.map((item, index) => ({
        key: ((index + 1 + localHour) % 24) + ':00',
        'Historic price': item,
        'Current price': lastValue,
      }));
      break;

    default:
      return [];
      break;
  }
}

// format a price to have decimals and a dollar sign
export function axislessPriceFormatter(
  num: number,
  noSymbol?: boolean
): string {
  const rounded = Math.round(num * 100000) / 100000;

  return `${(noSymbol ? '' : '$ ') + formatDigits(rounded)}`;
}

export function priceFormatter(num: number): string {
  const rounded = Math.round(num * 100000) / 100000;

  return `${rounded}`;
}

// millify a number
export function formatNumber(
  num: number | undefined,
  decimals?: number
): string {
  if (num === undefined) return '0';

  return millify(num, {
    precision: decimals ? decimals : 2,
  });
}
