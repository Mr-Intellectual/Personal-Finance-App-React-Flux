import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { Context } from "../store/appContext";


const Budget = () => {
	const { store, actions } = useContext(Context);

	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {

		actions.setBudget(value)

		setIsEditing(false);
	};


	return (
		<div className='alert alert-secondary p-4 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={store.user[0]["budget"]} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={store.user[0]["budget"]} />
			)}
		</div>
	);
};

export default Budget;