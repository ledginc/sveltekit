import type { ProcessScaffolding } from "$lib/processScaffolding";


export function resolveReference(key: string, process: ProcessScaffolding) {
  
  let value = "";
  
  process.sections.forEach(section => {
    section.objects.forEach(obj => {
      if(obj.id === key) {
        value = obj.properties.output;
      }
    });
  });

  return value;
}