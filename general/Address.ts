/**
 * Address Interface
 * @typedef {Object} Address
 * @property {string} street - The street of the address
 * @property {string} zipcode - The zipcode of the address
 * @property {string} cityTown - The city or town of the address
 * @property {string} nationalCode - The national code of the address
 */
export interface Address {
  street: string;
  zipcode: string;
  cityTown: string;
  nationalCode: string;
}

/**
 * Address Interface with Geo Lat Long
 * @typedef {Object} AddressWithGeoLatLong
 * @property {string} longitude - The longitude of the address
 * @property {string} lattitude - The lattitude of the address
 * @extends {Address}
 * @see {@link Address}
 */
export interface AddressWithGeoLatLong extends Address {
  longitude: string;
  lattitude: string;
}
