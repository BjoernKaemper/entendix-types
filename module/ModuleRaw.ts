import { ConditionTypes } from '../enums/ConditionTypes';

/**
 * Medium raw interface
 * @typedef {Object} ModuleMediumRawItem
 * @property {string} key - The key of the plant
 * @property {string} value - The value of the plant
 */
export interface ModuleMediumRawItem {
  [key: string]: string;
}

/**
 * Module medium raw interface
 * @typedef {Array<ModuleMediumRawItem>} ModuleMediumRaw
 * @see {@link PlantRawItem}
 */
interface ModuleMediumRaw extends Array<ModuleMediumRawItem> {}

/**
 * PlantRaw interface
 * @typedef {Object} PlantRaw
 * @property {ConditionTypes} Condition - The condition of the module
 * @property {string} ModuleName - The module name of the module
 * @property {string} ModuleType - The module type of the module
 * @property {ModuleMediumRaw} Module - The mediums of the module
 */
export interface ModuleRaw {
  Condition: ConditionTypes;
  ModuleName: string;
  ModuleType: string;
  Mediums: ModuleMediumRaw[];
}
