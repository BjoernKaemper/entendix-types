import { ConditionTypes } from '../enums/ConditionTypes';

/**
 * Module raw interface
 * @typedef {Object} PlantModuleRawItem
 * @property {string} key - The key of the plant
 * @property {string} value - The value of the plant
 */
export interface PlantModuleRawItem {
  [key: string]: string;
}

/**
 * Module raw interface
 * @typedef {Array<PlantModuleRawItem>} PlantModuleRaw
 * @see {@link PlantRawItem}
 */
interface PlantModuleRaw extends Array<PlantModuleRawItem> {}

/**
 * PlantRaw interface
 * @typedef {Object} PlantRaw
 * @property {ConditionTypes} Condition - The condition of the plant
 * @property {string} PlantName - The plant name of the plant
 * @property {string} PlantType - The plant type of the plant
 * @property {ModuleRaw} Plants - The modules of the plant
 */
export interface PlantRaw {
  Condition: ConditionTypes;
  PlantName: string;
  PlantType: string;
  Modules: PlantModuleRaw[];
}
