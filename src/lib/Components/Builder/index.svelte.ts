import { get, writable } from 'svelte/store';
import type { BuilderObject } from '$lib/Constants/BuilderObjects';

export const process = writable<Process | null>(null);

export function createProcess(name: string) {
  process.set({
    id: 1,
    name: name,
    sections: [],
  });
  console.log(get(process))
}
