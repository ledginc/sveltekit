export interface ProcessScaffolding {
  id: string,
  version: number,
  name: string,
  sections: ProcessSectionScaffolding[]
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
  subtype: string;
  description: string;
  mutable: boolean;
  defaultValue: any;
  required: boolean;
  options?: { label: string; value: any }[];
}