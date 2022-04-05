import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Chart.css';

const Chart = ({data}) => {
    return (
        <div className='chart-container'>
           <div className='half-width'>
           <h1 className='chart-title'>MONTH WISE SELL</h1>
           <LineChart width={700} height={500} data={data}>
                <Line dataKey={'sell'}stroke="#82ca9d" ></Line>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <Legend></Legend>
            </LineChart>
           </div>
           <div className='half-width'>
               <h1 className='chart-title'>Investment VS Revenue</h1>
           <BarChart
          width={700}
          height={500}
          data={data}
            margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
           </div>
           
        </div>
    );
};

export default Chart;