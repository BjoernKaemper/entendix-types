import { ConditionTypes } from '../enums/ConditionTypes';

/**
 * Aggregate interface
 * @typedef {Object} Aggregate
 * @property {string} id - The id of the aggregate
 * @property {Object} data - The data of the aggregate
 * @property {string} data.aggregateName - The name of the aggregate
 * @property {string} data.aggregateType - The type of the aggregate
 * @property {ConditionTypes} data.condition - The condition of the aggregate
 */
export interface Aggregate {
  id: string;
  data: {
    aggregateName: string;
    aggregateType: string;
    condition?: ConditionTypes;
  };
}
