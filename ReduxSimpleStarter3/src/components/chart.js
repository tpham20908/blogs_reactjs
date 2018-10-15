import _ from "lodash";
import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const average = data => (
  _.round(_.sum(data)/data.length)
)

export default props => (
  <div>
    <Sparklines data={props.data} height={120} width={180}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>Average: {average(props.data)}{props.unit}</div>
  </div>
)