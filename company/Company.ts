import type { Address } from '../general/Address';

/**
 * Company interface
 * @typedef {Object} Company
 * @property {string} id - The unique identifier of the company
 * @property {Object} data - The data of the company
 * @property {string} data.companyName - The name of the company
 * @property {Address} data.address - The address of the company
 * @see {@link Address}
 */
export default interface Company {
  id: string;
  data: {
    companyName: string;
    address: Address;
  };
}
