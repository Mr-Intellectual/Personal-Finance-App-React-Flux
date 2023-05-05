import React, { useContext } from 'react';
import { useTheme } from '@mui/material';
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Label, ResponsiveContainer, Bar, Legend } from 'recharts';
import Title from './titles';
import { Context } from "../store/appContext";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


export default function Chart() {
  const theme = useTheme();
  const { store, actions } = useContext(Context);



  function getData() {
    const info = actions.getExpenseIncome("dashboard");
    let data = [];

    for (let key in info) {
      let incomes = info[key] ? info[key].filter(item => item.income) : [];
      let expenses = info[key] ? info[key].filter(item => item.cost) : [];

      let totalIncome = incomes.reduce((acc, item) => acc + item.income, 0);
      let totalExpenses = expenses.reduce((acc, item) => acc + item.cost, 0);

      data.push({
        name: key,
        Income: totalIncome,
        Expenses: totalExpenses
      });
    }

    return data;
  }


  actions.getExpenseIncome("dashboard")


  return (
    <div className='container'>

      <Title>Pass 7 Days</Title>
      <BarChart width={730} height={250} data={getData()}>
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