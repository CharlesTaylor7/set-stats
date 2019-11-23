import React from 'react';
import { Chart as RChart } from 'react-charts'

import "./Chart.css";
import { averageNumberOfSets } from '../utilities/set';
import choose from '../utilities/choose';

const setStats = Array.from(
  { length: 12 },
  (_, n) => [n, averageNumberOfSets(n)]
);

const moreData = Array.from(
  { length: 81 },
  (_, k) => [k, choose(81, k)]
)

const Chart = () => {
  const data = React.useMemo(
    () => [
      { data: setStats },
      { data: moreData },
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
