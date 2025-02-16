import type { ProcessScaffolding } from "./processScaffolding";
import { v4 as uuidv4 } from 'uuid';

export class Process {
  processId: string;
  processVersion: number;
  transactionId: string;
  data: any[];
  constructor(object: ProcessScaffolding) {
    this.processId = object.id;
    this.processVersion = object.version;
    this.transactionId = uuidv4();
    this.data = object.sections.flatMap(section =>
      section.objects.map(obj => ({
        id: obj.id,
        value: obj.properties.defaultValue
    })));
  }

  updateValue(objectId: string, value: any) {
    const obj = this.data.find(obj => obj.id === objectId);
    if (obj) {
      obj.value = value;
    }
  }
}
