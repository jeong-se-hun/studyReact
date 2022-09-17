import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
  const totalMaximum = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));

  return (
    <div className="chart">
      {props.dataPoints.map(point => (
        <ChartBar key={point.label} value={point.value} maxValue={totalMaximum} label={point.label} />
      ))}
    </div>
  );
};

export default Chart;
