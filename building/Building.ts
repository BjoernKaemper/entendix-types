import type { AddressWithGeoLatLong, Address } from '../general/Address';
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

export type Building = {
  id: string;
  data: {
    buildingName: string;
    usableSpace: number;
    address?: AddressWithGeoLatLong;
    buildingVolume?: number;
    quantityFloors?: number;
    subsections?: Array<BuildingSubsection>;
  };
};

/**
 * Flat object of changeable props for a building for adding/editing a building
 */
export interface FlatBuildingData extends Address {
  /** The name of the building */
  buildingName: string;
  /** The usable space of the building */
  usableSpace: number;
  /** The volume of the building */
  buildingVolume: number;
  /** The quantity of floors of the building */
  quantityFloors: number;
}

/**
 * Partial FlatBuildingData object for updating a building
 */
export type BuildingUpdateData = Partial<FlatBuildingData>;

/**
 * Flat object of changeable props for a building for creating a building
 */
export interface FlatBuildingCreateData extends AddressWithGeoLatLong {
  /** The name of the building */
  buildingName: string;
  /** The usable space of the building */
  usableSpace: number;
  /** The SiteID of the Site we want to add the building */
  siteId: string;
}
