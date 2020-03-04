import React from 'react';
import { Chart as RChart } from 'react-charts'

import "./Chart.css";
import { averageNumberOfSets } from '../utilities/set';

const setsPerTableSize = () => Array.from(
  { length: 20 },
  (_, n) => [n, averageNumberOfSets(n)]
);

// const trials = Array.from(
//   { length: 10000 },
//   () => randomTrial(12)
// );
// const o = [];
// for(let t of trials) {
//   o[t] = (o[t] || 0) + 1
// }

// const setsPerOrdinaryTable = o.map((v, i) => [i, v])

const Chart = () => {
  const data = React.useMemo(
    () => [
      { data: setsPerTableSize() },
      // { data: moreData },
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div className="chart">
      <RChart data={data} axes={axes} />
    </div>
  )
}

export default Chart;
