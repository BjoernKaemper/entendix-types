import type { Aggregate } from '../aggregate/Aggregate';
import { ConditionTypes } from '../enums/ConditionTypes';

/**
 * Medium interface
 * @typedef {Object} Medium
 * @property {string} id - The id of the medium
 * @property {Object} data - The data of the medium
 * @property {string} data.mediumName - The name of the medium
 * @property {string} data.mediumType - The type of the medium
 * @property {ConditionTypes} data.condition - The condition of the medium
 * @property {Array<any>} data.aggregates - The aggregates of the medium
 */
export interface Medium {
  id: string;
  data: {
    mediumName: string;
    mediumType: string;
    condition?: ConditionTypes;
    aggregates?: Array<Aggregate>;
  };
}
