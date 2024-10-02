/**
 * Device raw raw interface
 * @typedef {Object} DeviceRawItem
 * @property {string} key - The key of the Device item
 * @property {string} value - The value of the Device item
 */
export interface DeviceRawItem {
  [key: string]: string;
}

export interface DeviceRaw extends Array<DeviceRawItem> {}
