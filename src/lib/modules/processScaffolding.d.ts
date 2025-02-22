export interface ProcessScaffolding {
  id: string,
  version: number,
  name: string,
  sections: ProcessSectionScaffolding[],
  outputs: Map<string, any>
}

interface ProcessSectionScaffolding {
  id: string,
  order: number,
  name: string,
  objects: ProcessObject[]
}

type ProcessObjectScaffolding =
  | ProcessInputObjectScaffolding
  | ProcessMathObjectScaffolding
  | ProcessConditionObjectScaffolding
  | ProcessActionObjectScaffolding
  | ProcessLogicObjectScaffolding
  | ProcessIntegrationObjectScaffolding
  | ProcessTableObjectScaffolding
  | ProcessStaticObjectScaffolding;

interface BaseProcessObjectScaffolding {
  id: string;
  type: string;
}

interface ProcessInputObjectScaffolding extends BaseProcessObjectScaffolding {
  type: "input";
  properties: ProcessInputPropertiesScaffolding;
  output: any;
}

interface ProcessMathObjectScaffolding extends BaseProcessObjectScaffolding {
  type: "math";
  properties: ProcessMathPropertiesScaffolding;
}

interface ProcessConditionObjectScaffolding extends BaseProcessObjectScaffolding {
  type: "condition";
  properties: ProcessConditionPropertiesScaffolding;
}

interface ProcessActionObjectScaffolding extends BaseProcessObjectScaffolding {
  type: "action";
  properties: ProcessActionPropertiesScaffolding;
}

interface ProcessLogicObjectScaffolding extends BaseProcessObjectScaffolding {
  type: "logic";
  properties: ProcessLogicPropertiesScaffolding;
}

interface ProcessIntegrationObjectScaffolding extends BaseProcessObjectScaffolding {
  type: "integration";
  properties: ProcessIntegrationPropertiesScaffolding;
}

interface ProcessTableObjectScaffolding extends BaseProcessObjectScaffolding {
  type: "table";
  properties: ProcessTablePropertiesScaffolding;
}

interface ProcessStaticObjectScaffolding extends BaseProcessObjectScaffolding {
  type: "static";
  properties: ProcessStaticPropertiesScaffolding;
}

interface ProcessInputPropertiesScaffolding {
  label: string;
  subtype: "text" | "number" | "datetime" | "email" | "phone" | "money" | "percentage" | "file" | "address";
  description: string;
  mutable: boolean;
  defaultValue: any;
  required: boolean;
  options?: { label: string; value: any }[];
}

interface ProcessIntegrationPropertiesScaffolding {
  subtype: "gmap_streetview";
  required: boolean;
  place: string;
}