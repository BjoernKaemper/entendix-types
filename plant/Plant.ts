import { ConditionTypes } from '../enums/ConditionTypes';
import type { Module } from '../module/Module';

/**
 * Plant interface
 * @typedef {Object} Plant
 * @property {string} id - The id of the plant
 * @property {Object} data - The data of the plant
 * @property {string} data.plantName - The name of the plant
 * @property {string} data.plantType - The type of the plant
 * @property {ConditionTypes} data.condition - The condition of the plant
 * @property {Array<Module>} data.modules - The modules of the plant
 */
export interface Plant {
  id: string;
  data: {
    plantName: string;
    plantType: string;
    condition?: ConditionTypes;
    modules?: Array<Module>;
  };
}
