interface Process {
  id: number,
  name: string,
  sections: ProcessSection[]
}

interface ProcessSection {
  id: number,
  order: number,
  name: string,
  objects: ProcessObject[]
}

type ProcessObject =
  | ProcessInputObject
  | ProcessMathObject
  | ProcessConditionObject
  | ProcessActionObject
  | ProcessLogicObject
  | ProcessIntegrationObject
  | ProcessTableObject
  | ProcessStaticObject;

interface BaseProcessObject {
  id: number;
  type: string;
}

interface ProcessInputObject extends BaseProcessObject {
  type: "input";
  properties: ProcessInputProperties;
}

interface ProcessMathObject extends BaseProcessObject {
  type: "math";
  properties: ProcessMathProperties;
}

interface ProcessConditionObject extends BaseProcessObject {
  type: "condition";
  properties: ProcessConditionProperties;
}

interface ProcessActionObject extends BaseProcessObject {
  type: "action";
  properties: ProcessActionProperties;
}

interface ProcessLogicObject extends BaseProcessObject {
  type: "logic";
  properties: ProcessLogicProperties;
}

interface ProcessIntegrationObject extends BaseProcessObject {
  type: "integration";
  properties: ProcessIntegrationProperties;
}

interface ProcessTableObject extends BaseProcessObject {
  type: "table";
  properties: ProcessTableProperties;
}

interface ProcessStaticObject extends BaseProcessObject {
  type: "static";
  properties: ProcessStaticProperties;
}

interface ProcessInputProperties {
  name: string;
  type: string;
  description: string;
  mutable: boolean;
  defaultValue: any;
  required: boolean;
  options?: { label: string; value: any }[];
}