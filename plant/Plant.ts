import { ConditionTypes } from '../enums/ConditionTypes';
import type { LangString } from '../kpi/Kpi';
import type { Module } from '../module/Module';

/**
 * Plant status interface
 * @typedef {Object} PlantStatus
 * @property {string} name - The name of the plant status
 * @property {LangString} description - The description of the plant status
 * @property {ConditionTypes} condition - The condition of the plant status
 */
export interface PlantStatus {
  name: string;
  description: LangString;
  condition: ConditionTypes;
}

/**
 * Plant Alert interface
 * @typedef {Object} PlantAlert
 * @property {string} title - The title of the plant alert
 * @property {string} description - The description of the plant alert
 * @property {'error'} type - The type of the plant alert
 * @property {string} time - The time of the plant alert
 */
export interface PlantAlert {
  title: string;
  description: string;
  type: 'error';
  time: string;
}

/**
 * Plant interface
 * @typedef {Object} Plant
 * @property {string} id - The id of the plant
 * @property {Object} data - The data of the plant
 * @property {string} data.plantName - The name of the plant
 * @property {string} data.plantType - The type of the plant
 * @property {string} data.aasSemanticIdentifier - The AAS semantic identifier of the plant
 * @property {ConditionTypes} data.condition - The condition of the plant
 * @property {Array<Module>} data.modules - The modules of the plant
 * @property {Array<PlantStatus>} data.stati - The stati of the plant
 * @property {Array<PlantAlert>} data.alerts - The alerts of the plant
*/
export interface Plant {
  id: string;
  data: {
    plantName: string;
    plantType: string;
    condition?: ConditionTypes;
    modules?: Array<Module>;
    stati?: Array<PlantStatus>;
    alerts?: Array<PlantAlert>;
    aasSemanticIdentifier?: string;
  };
}
