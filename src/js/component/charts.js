import React from 'react';
import { useTheme } from '@mui/material';
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Label, ResponsiveContainer, Bar, Legend } from 'recharts';
import Title from './titles';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];
const data = [
  {
    "name": "Monday",
    "Income": 4000,
    "Expenses": 2400
  },
  {
    "name": "Tuesday",
    "Income": 3000,
    "Expenses": 1398
  },
  {
    "name": "Wendesday",
    "Income": 2000,
    "Expenses": 3800
  },
  {
    "name": "Thursday",
    "Income": 2780,
    "Expenses": 3908
  },
  {
    "name": "Friday",
    "Income": 1890,
    "Expenses": 7800
  },
  {
    "name": "Saturday",
    "Income": 2390,
    "Expenses": 3800
  },
  {
    "name": "Sunday",
    "Income": 3490,
    "Expenses": 4300
  }
]

export default function Chart() {
  const theme = useTheme();

  return (
    <div className='container'>

        <Title>Pass 7 Days</Title>
        <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Income" fill="#8884d8" />
  <Bar dataKey="Expenses" fill="#82ca9d" />
</BarChart>
        
    </div>
  );
}