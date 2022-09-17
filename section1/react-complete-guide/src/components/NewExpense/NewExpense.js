import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const { onAddExpense } = props;
  const [newExpenseState, setNewExpenseState] = useState(false);

  const newExpenseStateChangeHandler = () => setNewExpenseState(!newExpenseState);

  const saveExpenseDataHandler = expenseDate => {
    const expense = {
      ...expenseDate,
      id: Math.random() * Math.random().toString(),
    };
    onAddExpense(expense);
  };

  const newExpenseStateCheck = () => {
    if (!newExpenseState) return <button onClick={newExpenseStateChangeHandler}>Add New Expense</button>;
    return (
      <ExpenseForm newExpenseStateChange={newExpenseStateChangeHandler} onSaveExpenseData={saveExpenseDataHandler} />
    );
  };

  return <div className="new-expense">{newExpenseStateCheck()}</div>;
};

export default NewExpense;
