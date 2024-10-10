import { ConditionTypes } from '../enums/ConditionTypes';

/**
 * Aggregate raw interface
 * @typedef {Object} MediumAggregateRawItem
 * @property {string} key - The key of the Aggregate
 * @property {string} value - The value of the Aggregate
 */
export interface MediumAggregateRawItem {
  [key: string]: string;
}

/**
 * Medium Aggregate Raw interface
 * @typedef {Array<MediumAggregateRawItem>} MediumAggregateRaw
 * @see {@link PlantRawItem}
 */
interface MediumAggregateRaw extends Array<MediumAggregateRawItem> {}

/**
 * Medium Raw interface
 * @typedef {Object} MediumRaw
 * @property {ConditionTypes} Condition - The condition of the medium
 * @property {string} MediumName - The medium name of the medium
 * @property {string} MediumType - The medium type of the medium
 * @property {MediumAggregateRaw} Aggregates - The aggregates of the medium
 */
export interface MediumRaw {
  Condition: ConditionTypes;
  MediumName: string;
  MediumType: string;
  Aggregates: MediumAggregateRaw[];
}
