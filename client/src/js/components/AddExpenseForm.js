import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const AddExpenseForm = () => {
    const { store, actions } = useContext(Context);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            name,
            cost: parseInt(cost),
            category
        };

        actions.addExpense(expense);

        setName('');
        setCost('');
        setCategory('');
    };

    function displayBillCategories() {
        const billCategories = Object.keys(store.randomInfo[0]['Random Bills']);
        return billCategories;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='cost'>Cost:</label>
                    <input
                        required='required'
                        type='number'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    />
                </div>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='cost'>Category:</label>
                    <select
                        required='required'
                        type='number'
                        className='form-control'
                        id='category'
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <option value=''>Choose...</option>
                        {displayBillCategories().map((category, index) => (
                            <option value={category} key={index}>
                                {category}
                            </option>
                        ))}
                        <option value='Other'>Other</option>
                    </select>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary btn-sm'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
