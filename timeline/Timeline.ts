import { DateTime } from 'luxon';

/**
 * Timeline Date Point Interface
 * @typedef {Object} TimelineDataPoint
 * @property {DateTime} timestamp - The timestamp of the data point
 * @property {number} value - The value of the data point
 * @see {@link DateTime}
 */
export type TimelineDataPoint = {
  timestamp: DateTime;
  value: number;
}
