import { ConditionTypes } from '../enums/ConditionTypes';

/**
 * AggregateRaw interface
 */
export interface AggregateRaw {
  /** The unique identifier of the aggregate */
  id: string;
  /** The name of the aggregate */
  AggregateName: string;
  /** The type of the aggregate */
  AggregateType: string;
  /** Condition of current aggregate */
  Condition: ConditionTypes;
}
