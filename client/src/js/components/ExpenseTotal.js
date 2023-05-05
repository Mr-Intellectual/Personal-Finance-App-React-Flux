import React, { useContext } from 'react';
import { Context } from "../store/appContext";


const ExpenseTotal = () => {
	const { store, actions } = useContext(Context);


	const total = store.user[0]["expenses"].reduce((total, item) => {
		return (total += item.cost);
	}, 0)


	return (
		<div className='alert alert-primary p-4'>
			<span>Spent so far: $ {total.toLocaleString()}</span>
		</div>
	);
};

export default ExpenseTotal;