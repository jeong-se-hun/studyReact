import './ChartBar.css';

const ChartBar = props => {
  const { value, maxValue } = props;

  const barFillHeigth = value > 0 ? Math.round((value / maxValue) * 100) + '%' : '0%';

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeigth }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
