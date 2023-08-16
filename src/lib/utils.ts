import { clsx, type ClassValue } from 'clsx';
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

// format the price to have decimals and a dollar sign
export function axislessPriceFormatter(
  num: number,
  noSymbol?: boolean
): string {
  const rounded = Math.round(num * 100000) / 100000;
  return `${(noSymbol ? '' : '$ ') + rounded}`;
}

export function priceFormatter(num: number): string {
  const rounded = Math.round(num * 100000) / 100000;
  return `${rounded}`;
}
