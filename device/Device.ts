import { LangString } from '../kpi/Kpi';

export type Record = {
  type: string;
  value: string;
};

export type DataPoint = {
  PresentValue: number;
  Unit: string;
  Description: LangString;
  Datasource: Array<Record>;
};

export type Device = {
  id: string;
  data: {
    [key: string]: any; //TODO: should be [key: string]: DataPoint;
    level: number;
    parentChain: Array<string>;
  };
  parents: string[];
};
