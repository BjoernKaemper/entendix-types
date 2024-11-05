import type { Address, AddressWithGeoLatLong } from '../general/Address';
import type { Building } from '../building/Building';

/**
 * SiteData interface
 * @typedef {Object} SiteData
 * @property {AddressWithGeoLatLong} address - The address of the site
 * @property {string} siteName - The name of the site
 * @property {string} imagesrc - The image source of the site
 * @see {@link AddressWithGeoLatLong}
 */
interface SiteData {
  address: AddressWithGeoLatLong;
  siteName: string;
  imagesrc?: string;
}

/**
 * SiteData interface with building information
 * @typedef {Object} SiteDataWithBuildingInformation
 * @property {Building[]} buildings - The buildings of the site
 * @see {@link Building}
 */
interface SiteDataWithBuildingInformation extends SiteData {
  buildings?: Building[];
}

/**
 * Site interface
 * @typedef {Object} Site
 * @property {string} id - The id of the site
 * @property {SiteData} data - The data of the site
 * @see {@link SiteData}
 */
export interface Site {
  id: string;
  data: SiteData;
}

/**
 * Site interface with building information
 * @typedef {Object} SiteWithBuildinginformation
 * @property {string} id - The id of the site
 * @property {SiteDataWithBuildingInformation} data - The data of the site
 * @see {@link SiteDataWithBuildingInformation}
 */
export interface SiteWithBuildinginformation {
  id: string;
  data: SiteDataWithBuildingInformation;
}

/**
 * Flat object of changeable props for a site for adding/editing a site
 */
export interface FlatSiteData extends Address {
  siteName: string;
}

/**
 * Partial FlatSideData object for updating a site
 */
export type SiteUpdateData = Partial<FlatSiteData>;
