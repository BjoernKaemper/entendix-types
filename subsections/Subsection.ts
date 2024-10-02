import { ConditionTypes } from '../enums/ConditionTypes';
import type { SubsectionPlant } from './SubsectionPlant';

/**
 * Subsection interface
 * @typedef {Object} Subsection
 * @property {ConditionTypes} condition - The condition of the subsection
 * @property {string} tradeName - The trade name of the subsection
 * @property {string} tradeType - The trade type of the subsection
 * @property {Array<SubsectionPlant>} plants - The plants of the subsection
 * @see {@link SubsectionPlant}
 */
export interface Subsection {
  condition: ConditionTypes
  tradeName: string;
  tradeType: string;
  plants: Array<SubsectionPlant>
}
