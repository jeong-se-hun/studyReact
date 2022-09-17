import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
  const { expenses, currentYear } = props;

  const filteredExpenses = expenses.filter(expenses => expenses.date.getFullYear() === currentYear);

  const ExpenseItemCheck = () => {
    if (filteredExpenses.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expenses</h2>;
    }

    return filteredExpenses.map(expense => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    ));
  };

  return <ul className="expenses-list">{ExpenseItemCheck()}</ul>;
};

export default ExpensesList;
