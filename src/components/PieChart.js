import React from 'react';
import { Pie, PolarArea } from 'react-chartjs-2';
import './PieChart.css';

const BarChart = ({ chartData, heading }) => {
  return (
    <div className='chart'>
      <h1 className='chart-heading'>{heading}</h1>
      <div className='chart-container'>
        <Pie
          options={{ responsive: true }}
          data={{
            labels: Object.keys(chartData).map((el) => el.toUpperCase()),
            datasets: [
              {
                label: 'My First Dataset',
                data: Object.values(chartData).map((el) => el.data),
                backgroundColor: Object.values(chartData).map((el) => el.color),
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
