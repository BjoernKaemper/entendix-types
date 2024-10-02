/**
 * Building address raw interface
 * @typedef {Object} BuildingAddressRaw
 * @property {string} key - The key of the building address
 * @property {string} value - The value of the building address
 */
export interface BuildingAddressRawItem {
  [key: string]: string;
}

/**
 * Building address raw interface
 * @typedef {Array<BuildingAddressRawItem>} BuildingAddressRaw
 * @see {@link BuildingAddressRawItem}
 */
interface BuildingAddressRaw extends Array<BuildingAddressRawItem> {}

/**
 * BuildingRaw interface
 * @typedef {Object} BuildingRaw
 * @property {string} id - The unique identifier of the building
 * @property {Object} data - The data of the building
 * @property {BuildingAddressRaw} data.Address - The adress of the building
 * @property {string} data.BuildingName - The name of the building
 * @property {string} data.UsableSpace - The usable space of the building
 * @property {string} data.BuildingVolume - The volume of the building
 * @property {string} data.QuantityFloors - The quantity of floors of the building
 */
export interface BuildingRaw {
  id: string;
  data: {
    Address: BuildingAddressRaw;
    BuildingName: string;
    UsableSpace: string;
    BuildingVolume: string;
    QuantityFloors: string;
  };
}
