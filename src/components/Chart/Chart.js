import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({data}) => {
    return (
        <div>
           <div>
           <h1 className='chart-title'>MONTH WISE SELL</h1>
           <LineChart width={700} height={500} data={data}>
                <Line dataKey={'sell'}stroke="#82ca9d" ></Line>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <Legend></Legend>
            </LineChart>
           </div>
           
        </div>
    );
};

export default Chart;