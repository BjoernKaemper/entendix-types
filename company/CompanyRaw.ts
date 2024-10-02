/**
 * Company address raw interface
 * @typedef {Object} CompanyAddressRaw
 * @property {string} key - The key of the Company address
 * @property {string} value - The value of the Company address
 */
export interface CompanyAddressRawItem {
  [key: string]: string;
}

/**
 * Company address raw interface
 * @typedef {Array<CompanyAddressRawItem>} CompanyAddressRaw
 * @see {@link CompanyAddressRawItem}
 */
interface CompanyAddressRaw extends Array<CompanyAddressRawItem>{}

/**
 * CompanyRaw interface
 * @typedef {Object} CompanyRaw
 * @property {string} id - The unique identifier of the Company
 * @property {CompanyAddressRaw} data - The data of the Company
 * @property {string} data.CompanyName - The name of the Company
 */
export interface CompanyRaw {
  id: string;
  data: {
    Address: CompanyAddressRaw;
    CompanyName: string;
  };
}
