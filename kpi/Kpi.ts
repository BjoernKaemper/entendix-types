import type { TimelineDataPoint } from '../timeline/Timeline';
import { ConditionTypes } from '../enums/ConditionTypes';
/**
 * Language string type
 * @typedef {Object} LangString
 * @property {string} en - The English language string
 * @property {string} de - The German language string
 */
export type LangString = {
  en: string;
  de: string;
};

/**
 * Calculation value type
 * @typedef {Object} CalculationValue
 * @property {string} physicalUnit - The physical unit of the calculation value
 * @property {string} calculationType - The calculation type of the calculation value
 * @property {number} presentValue - The present value of the calculation value
 */
export type CalculationValue = {
  physicalUnit: string;
  calculationType: string;
  presentValue: number;
};

/**
 * Accumulated values type
 * @typedef {Object} AccumulatedValues
 * @property {CalculationValue} annualValue - The annual value of the accumulated values
 * @property {CalculationValue} monthlyValue - The monthly value of the accumulated values
 * @property {CalculationValue} dailyValue - The daily value of the accumulated values
 */
export type AccumulatedValues = {
  annualValue: CalculationValue;
  monthlyValue: CalculationValue;
  dailyValue: CalculationValue;
};

/**
 * Property references type
 * @typedef {Object} PropertyReferences
 * @property {Array} buildingSurface - The building surface property references
 * @property {Array} waterconsumption - The water consumption property references
 */
export type PropertyReferences = {
  buildingSurface: Array<any>; // TODO: Define type
  waterconsumption: Array<any>; // TODO: Define type
};

/**
 * Annotation type
 * @typedef {Object} Annotation
 * @property {string} annotationText - The annotation text
 * @property {string} timestampOfCreation - The timestamp of creation of the annotation
 * @property {string} referringTimestamp - The referring timestamp of the annotation
 * @property {string} creator - The creator of the annotation
 * @property {boolean} madeByEntendix - The annotation was made by Entendix
 * @property {boolean} madeByAi - The annotation was made by AI
 * @property {boolean} madeByUser - The annotation was made by the user
 * @property {string} annotationType - The annotation type
 */
export type Annotation = {
  annotationText: string;
  timestampOfCreation: string;
  referringTimestamp: string;
  creator: string;
  madeByEntendix: boolean;
  madeByAi: boolean;
  madeByUser: boolean;
  annotationType: string;
};

/**
 * KPI type
 * @typedef {Object} KPI
 * @property {string} id - The unique identifier of the KPI
 * @property {Object} data - The data of the KPI
 * @property {LangString} data.name - The name of the KPI
 * @property {LangString} data.context - The context of the KPI
 * @property {CalculationValue} data.value - The value of the KPI
 * @property {AccumulatedValues} data.accumulatedValues - The accumulated values of the KPI
 * @property {Array} data.constantVariables - The constant variables of the KPI
 * @property {PropertyReferences} data.propertyReferences - The property references of the KPI
 * @property {Array} data.limits - The limits of the KPI
 * @property {number} data.calculationCycle - The calculation cycle of the KPI
 * @property {Array} data.annotations - The annotations of the KPI
 * @property {Array<TimelineDataPoint>} timeline - The timeline of the KPI
 * @property {string} type - The type of the KPI
 * @property {ConditionTypes} condition - The condition of the KPI
 */
export type Kpi = {
  id: string;
  data: {
    name: LangString;
    context: LangString;
    value: CalculationValue;
    accumulatedValues: AccumulatedValues;
    constantVariables: Array<any>; // TODO: Define type
    propertyReferences: PropertyReferences;
    limits: Array<string>; // TODO: Define type
    calculationCycle: number;
    annotations: Array<Annotation>;
    type?: string;
    condition?: ConditionTypes;
  };
  timeline?: Array<TimelineDataPoint>;
};
