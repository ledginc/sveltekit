import { get, writable } from 'svelte/store';

export const process = writable<Process | null>(null);

export function createProcess(name: string) {
  process.set({
    id: 1,
    name: name,
    sections: [{
      id: 0,
      order: 1,
      name: 'Section 1',
      objects: [],
    }],
  });
  console.log(get(process))
}


export async function addObjectToProcess(category: string, type: string, currentsectionId: number) {
  const processValue = get(process);
  if (!processValue) return;

  const newObject: ProcessInputObject = {
    id: 420,
    type: "input",
    properties: {
      name: "",
      type: type,
      description: "",
      mutable: true,
      defaultValue: "",
      required: false,
    },
  };

  processValue.sections.find((section) => section.id === currentsectionId)?.objects.push(newObject);

  process.set(processValue);
  console.log(get(process));
}