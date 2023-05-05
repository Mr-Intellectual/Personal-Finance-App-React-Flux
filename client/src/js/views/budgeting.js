import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../styles/table.css'
import { Context } from "../store/appContext";
import { v4 as uuidv4 } from 'uuid';

import Budget from "../components/Budget"
import RemainingBudget from "../components/Remaining"
import ExpenseTotal from "../components/ExpenseTotal"
import ExpenseList from "../components/ExpenseList"
import AddExpenseForm from "../components/AddExpenseForm"

export default function Budgeting() {
  // const { store, actions } = useContext(Context);

  
  return (
    //Some html code should go here
    <div className="p-4" id="">
      <h1 className='mt-3'>Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <RemainingBudget />
        </div>
        <div className='col-sm'>
          <ExpenseTotal />
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row '>
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
}
