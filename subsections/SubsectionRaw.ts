import { ConditionTypes } from '../enums/ConditionTypes';

/**
 * Plant raw interface
 * @typedef {Object} PlantRawItem
 * @property {string} key - The key of the plant
 * @property {string} value - The value of the plant
 */
export interface SubsectionPlantRawItem {
  [key: string]: string;
}

/**
 * Plant raw interface
 * @typedef {Array<PlantRawItem>} PlantRaw
 * @see {@link PlantRawItem}
 */
interface SubsectionPlantRaw extends Array<SubsectionPlantRawItem> {}

/**
 * SubsectionRaw interface
 * @typedef {Object} SubsectionRaw
 * @property {ConditionTypes} Condition - The condition of the subsection
 * @property {string} TradeName - The trade name of the subsection
 * @property {string} TradeType - The trade type of the subsection
 * @property {PlantRaw} Plants - The plants of the subsection
 * @property {PlantRaw} Plants - The plants of the subsection
 */
export interface SubsectionRaw {
  Condition: ConditionTypes;
  TradeName: string;
  TradeType: string;
  Plants: SubsectionPlantRaw[];
}
