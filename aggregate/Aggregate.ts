import { ConditionTypes } from '../enums/ConditionTypes';
/**
 * Transformed information about a single BACnet datapoint
 */
export interface BACnetDatapoint {
  description: string;
  presentValue: string;
  objectIdentifier: string;
  objectName: string;
  objectType: string;
}

/**
 * Aggregate interface
 * @typedef {Object} Aggregate
 * @property {string} id - The id of the aggregate
 * @property {Object} data - The data of the aggregate
 * @property {string} data.aggregateName - The name of the aggregate
 * @property {string} data.aggregateType - The type of the aggregate
 * @property {ConditionTypes} data.condition - The condition of the aggregate
 * @property {Object} data.dataPoints - The data points of the aggregate
 */
export interface Aggregate {
  id: string;
  data: {
    aggregateName: string;
    aggregateType: string;
    condition?: ConditionTypes;
    dataPoints?: {
      [key: string]: {
        presentValue: string;
        description: {
          de: string;
          en: string;
        };
        unit: string;
        dataSource: {
          type: string;
          value: string;
        }[];
        dataPoint?: BACnetDatapoint;
      };
    };
  };
}
