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
 * Base plant interface
 * @typedef {Object} BasicPlant
 * @property {string} id - The id of the plant
 * @property {Object} data - The data of the plant
 * @property {string} data.plantName - The name of the plant
 * @property {string} data.plantType - The type of the plant
 */
export interface BasicPlant {
  id: string;
  data: {
    plantName: string;
    plantType: string;
  };
}

/**
 * Extended plant interface
 * @typedef {Object} Plant
 * @property {string} data.aasSemanticIdentifier - The AAS semantic identifier of the plant
 * @property {ConditionTypes} data.condition - The condition of the plant
 * @property {string} data.parentType - The type of the parent of the plant
 * @property {Array<Module>} data.modules - The modules of the plant
 * @property {Array<PlantStatus>} data.stati - The stati of the plant
 * @property {Array<PlantAlert>} data.alerts - The alerts of the plant
 */
export type Plant = BasicPlant & {
  data: {
    condition?: ConditionTypes;
    parentType: string;
    modules?: Array<Module>;
    stati?: Array<PlantStatus>;
    alerts?: Array<PlantAlert>;
    aasSemanticIdentifier?: string;
  };
};

/** Props of a plant that can (currently) be updated */
export interface PLantUpdateData {
  /** Name of the plant */
  plantName?: string;
  /** The type of the plant */
  plantType?: string;
}
