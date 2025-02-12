export interface Process {
  id: string,
  sections: ProcessSection[]
}

interface ProcessSection {
  id: string,
  order: number,
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
  id: string;
  type: string;
}

interface ProcessInputObject extends BaseProcessObject {
  type: "input";
  output: ProcessInputOutput;
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

interface ProcessInputOutput {
  subtype: string;
  value: {key: string, value: string};
}