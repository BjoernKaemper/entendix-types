export interface KpiRawItem {
  [key: string]: string;
}

export interface KpiNameRaw extends Array<KpiRawItem>{}
export interface KpiContextRaw extends Array<KpiRawItem>{}
export interface KpiValueRaw extends Array<KpiRawItem>{}
export interface KpiAnnotationRaw extends Array<KpiRawItem>{}

export interface KpiRaw {
  id: string;
  data: {
    Name: KpiNameRaw;
    Context: KpiContextRaw;
    Value: KpiValueRaw;
    AccumulatedValues: Array<KpiValueRaw>;
    ConstantVariables: Array<any>;
    PropertyReferences: {
      BuildingSurface: {
        keys: Array<any>;
      };
      Waterconsumption: {
        keys: Array<any>;
      };
    };
    Limits: Array<any>;
    CalculationCycle: string;
    Annotations: Array<KpiAnnotationRaw>;
  };
}
