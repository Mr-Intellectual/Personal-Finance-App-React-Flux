import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { Context } from "../store/appContext";


const ExpenseList = () => {
	const { store, actions } = useContext(Context);


	//Fix these functions
	const [filteredExpenses, setfilteredExpenses] = useState(store.user[0]["expenses"] || []);
	
	useEffect(() => {
		setfilteredExpenses(store.user[0]["expenses"]);
	}, [store.user[0]["expenses"]]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<div className='row'>
				<div className="col-4 pl-4 mt-2">
					<h6>Category:</h6>
				</div>
				<div className="col-6 pl-0 mt-2">
					<h6>Description:</h6>
				</div>
			</div>
			<ul className='list-group mt-1 mb-3'>
				{filteredExpenses.map((expense,index) => (
					<ExpenseItem
						key={`${expense.id}-${index}`}
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
						category={expense.category}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;