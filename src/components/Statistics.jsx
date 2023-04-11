import React from 'react';
import { Brush, CartesianGrid, Label, LabelList, Legend, Pie, PieChart, ReferenceLine, ResponsiveContainer, Text, Tooltip } from 'recharts';


const Statistics = () => {
    const data01 = [
        {
          "name": "Assignment 1",
          "value": 60
        },
        {
          "name": "Assignment 2",
          "value": 30
        },
        {
          "name": "Assignment 3",
          "value": 20
        },
        {
          "name": "Assignment 4",
          "value": 60
        },
        {
          "name": "Assignment 5",
          "value": 60
        },
        {
          "name": "Assignment 6",
          "value": 10
        }
      ];

    return (
        <div className='m-auto w-full bg-slate-300 overflow-hidden relative lg:z-10 -z-10'>
            <p className='text-center font-semibold text-xl'>Assignment marks chart</p>
            <PieChart width={350} height={350} className="sm:relative" >
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8844d8" isAnimationActive="true" animationDuration={4000} />
                <Tooltip></Tooltip>
                <Brush></Brush>
                <Legend></Legend>
            </PieChart>
        
        </div>
    );
};

export default Statistics;