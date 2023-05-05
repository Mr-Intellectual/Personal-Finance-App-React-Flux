import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: $ {props.budget.toLocaleString()}</span>
			<button type='button' className='btn btn-primary btn-sm' onClick={props.handleEditClick} style={{ fontSize: '10px' }}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;