import { process } from '$lib/Components/Builder/index.svelte';
import { debounce } from '../index.svelte';

process.subscribe((value: any) => {
  if (!value) return;
  saveProcess(value);
});

const saveProcess = debounce((value: any) => {

}, 1000);