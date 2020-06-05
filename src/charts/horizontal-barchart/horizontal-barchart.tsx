import React, { FunctionComponent } from "react";
import {TDataEntry} from "../../model";

type Props = {
  model: TDataEntry[];
  maxValue?:number;
  digits?: number;
  partsOrder?: [number, number, number],
  inverse?: boolean;
}
export const HorizontalBarchart: FunctionComponent<Props> = (props) => {
  const { digits, inverse, maxValue, model, partsOrder } = props;
  return <div className="mr-barchart">

  </div>;
}

HorizontalBarchart.defaultProps = {
  digits: 0,
  maxValue: 100,
  partsOrder: [1,3,2],
  inverse: false
}

export default HorizontalBarchart;
