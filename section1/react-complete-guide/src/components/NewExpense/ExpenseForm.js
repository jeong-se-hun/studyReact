import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  const { onSaveExpenseData, newExpenseStateChange } = props;

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDatee, setEnteredDate] = useState('');

  const titleChangeHandler = e => setEnteredTitle(e.target.value);
  const amountChangeHandler = e => setEnteredAmount(e.target.value);
  const dateChangeHandler = e => setEnteredDate(e.target.value);
  const submitHandler = e => {
    e.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDatee),
    };

    onSaveExpenseData(expenseDate);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      {' '}
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.0.1" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDatee} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={newExpenseStateChange}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
