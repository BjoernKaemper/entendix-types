import { ConditionTypes } from '../enums/ConditionTypes';
import type { Plant } from '../plant/Plant';

/**
 * Subsection interface
 * @typedef {Object} Subsection
 * @property {string} id - The id of the subsection
 * @property {Object} data - The data of the subsection
 * @property {ConditionTypes} data.condition - The condition of the subsection
 * @property {string} data.tradeName - The trade name of the subsection
 * @property {string} data.tradeType - The trade type of the subsection
 * @property {Array<Plant>} data.plants - The plants of the subsection
 * @see {@link SubsectionPlant}
 */
export interface Subsection {
  id: string;
  data: {
    condition: ConditionTypes
    tradeName: string;
    tradeType: string;
    plants: Array<Plant>
  }
}
