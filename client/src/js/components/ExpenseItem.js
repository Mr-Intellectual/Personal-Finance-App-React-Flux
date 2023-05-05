import React, { useContext } from 'react';
import { Context } from "../store/appContext";


const ExpenseItem = (props) => {
	const { store, actions } = useContext(Context);


	const handleDeleteExpense = () => {

		actions.deleteExpense(props.id)

	};

	return (
		<li className='list-group-item justify-content-between align-items-center'>
			<div className="row">
				<div className="col-4 pr-0">
					{props.category}
				</div>
				<div className="col-7 p-0">
					{props.name}
				</div>
				<div className="col-1 p-0">
					<span className='badge badge-primary badge-pill mr-3'>$ {props.cost.toLocaleString()}</span>
					<i className="fa-solid fa-trash fa-lg" onClick={handleDeleteExpense}/>
				</div>
			</div>
		</li>
	);
};

export default ExpenseItem;