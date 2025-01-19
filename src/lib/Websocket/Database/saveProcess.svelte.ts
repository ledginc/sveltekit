// import { process } from '$lib/Components/Builder/index.svelte';
import { debounce } from '.';

// process.subscribe((value: any) => {
//   if (!value) return;
//   saveProcess(value);
// });

const saveProcess = debounce((value: any) => {
  fetch('/api/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });
}, 1000);

