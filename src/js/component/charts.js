import React from 'react';
import { useTheme } from '@mui/material';
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Label, ResponsiveContainer, Bar } from 'recharts';
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
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

export default function Chart() {
  const theme = useTheme();

  return (
    <div className='container'>
        {/* <React.Fragment> */}
        <Title>Pass 7 Days</Title>
        <ResponsiveContainer
            width={"100%"}
            height={"50%"}
        >




                                
    <BarChart width={730} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>



            {/* <BarChart
            data={data}
            margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
            }}
            >
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="time" />
            <YAxis>
                <Label
                angle={270}
                position="left"
                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                >
                Sales ($)
                </Label>
            </YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey={"Name"} fill='#888fab'></Bar>
            <Bar dataKey={"Price"} fill='#82ca9d'></Bar>
            </BarChart> */}
        </ResponsiveContainer>
        {/* </React.Fragment> */}
        
    </div>
  );
}