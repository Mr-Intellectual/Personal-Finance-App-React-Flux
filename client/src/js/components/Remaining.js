import React, { useContext } from 'react';
import { Context } from "../store/appContext";


const RemainingBudget = () => {
	const { store, actions } = useContext(Context);
	
	
	const totalExpenses = store.user[0]["expenses"].reduce((total, item) => {
		return (total += item.cost);
	}, 0)

	const alertType = totalExpenses > store.budget ? 'alert-danger' : 'alert-success';
	

	return (
		<div className={`alert p-4 ${alertType}`}>
			
			<span>Remaining: $ {(store.user[0]["budget"] - totalExpenses).toLocaleString()}</span>
		</div>
	);
};

export default RemainingBudget;