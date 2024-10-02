/**
 * Site address raw interface
 * @typedef {Object} SiteAddressRaw
 * @property {string} key - The key of the site address
 * @property {string} value - The value of the site address
 */
export interface SiteAddressRawItem {
  [key: string]: string;
}

/**
 * Site address raw interface
 * @typedef {Array<SiteAddressRawItem>} SiteAddressRaw
 * @see {@link SiteAddressRawItem}
 */
interface SiteAddressRaw extends Array<SiteAddressRawItem> {}

/**
 * SiteRaw interface
 * @typedef {Object} SiteRaw
 * @property {string} id - The unique identifier of the site
 * @property {SiteAddressRaw} data - The data of the site
 * @property {string} data.SiteName - The name of the site
 */
export interface SiteRaw {
  id: string;
  data: {
    Address: SiteAddressRaw;
    SiteName: string;
  };
}
