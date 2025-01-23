import { get, writable } from 'svelte/store';

export const process = writable<Process | null>(null);

export async function createProcess(name: string) {
  process.set({
    id: "p1",
    name: name,
    sections: [{
      id: "s1",
      order: 1,
      name: 'Section 1',
      objects: [],
    }],
  });
}

export function addSectionToProcess() {
  const processValue = get(process);
  if (!processValue) return;

  const newSection: ProcessSection = {
    id: "s" + (Number(processValue.sections.length) + 1),
    order: Number(processValue.sections.length) + 1,
    name: "Section " + (Number(processValue.sections.length) + 1),
    objects: [],
  };

  processValue.sections.push(newSection);

  process.set(processValue);
}

export function addObjectToProcess(category: string, type: string, sectionId: string) {
  const processValue = get(process);
  if (!processValue) return;

  const totalNumberOfObjects: number = processValue.sections
    .map((section) => section.objects.length)
    .reduce((a, b) => a + b, 0);

  const newObject: ProcessInputObject = {
    id: "o" + (totalNumberOfObjects + 1),
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

  processValue.sections.find((section) => section.id === sectionId)?.objects.push(newObject);

  process.set(processValue);
}

export function updateProcess(newProcess: {name: string}) {
  process.update((value) => {
    if (!value) return value;

    return {
      ...value,
      name: newProcess.name,
    };
  });
  console.log(get(process));
}

export function updateSection(newSection: {id: string, name: string}) {
  console.log(newSection);
  const processValue = get(process);
  if (!processValue) return;

  const sectionIndex = processValue.sections.findIndex((section) => section.id === newSection.id);
  if (sectionIndex === -1) return;

  processValue.sections[sectionIndex].name = newSection.name;

  process.set(processValue);
}