import { writable } from 'svelte/store';

export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  } as T;
}

export const websocketConnection = writable<WebSocket | null>(null);

// exemple d'utilisation
//
// const debouncedFunction = debounce((value: string) => {
//   console.log(value);
// }, 500);
//