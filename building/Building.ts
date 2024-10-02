import type { AddressWithGeoLatLong } from '../general/Address';
import type { BuildingSubsection } from './BuildingSubsection';

/**
 * Building interface
 * @typedef {Object} Building
 * @property {string} id - The unique identifier of the building
 * @property {Object} data - The data of the building
 * @property {AddressWithGeoLatLong} data.address - The address of the building
 * @property {string} data.buildingName - The name of the building
 * @property {number} data.usableSpace - The usable space of the building
 * @property {number} data.buildingVolume - The volume of the building
 * @property {number} data.quantityFloors - The quantity of floors of the building
 * @property {Array<BuildingSubsection>} [data.subsections] - The subsections of the building
 */
export interface Building {
  id: string;
  data: {
    address: AddressWithGeoLatLong;
    buildingName: string;
    usableSpace: number;
    buildingVolume: number;
    quantityFloors: number;
    subsections?: Array<BuildingSubsection>;
  };
}
