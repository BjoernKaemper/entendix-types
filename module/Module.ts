import { ConditionTypes } from '../enums/ConditionTypes';
import type { Medium } from '../medium/Medium';

/**
 * Module interface
 * @typedef {Object} Module
 * @property {string} id - The id of the module
 * @property {Object} data - The data of the module
 * @property {string} data.moduleName - The name of the module
 * @property {string} data.moduleType - The type of the module
 * @property {ConditionTypes} data.condition - The condition of the module
 * @property {Array<Medium>} data.mediums - The mediums of the module
 */
export interface Module {
  id: string;
  data: {
    moduleName: string;
    moduleType: string;
    condition?: ConditionTypes;
    mediums?: Array<Medium>;
  };
}
