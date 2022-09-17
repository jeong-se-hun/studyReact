import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
  const { expenses } = props;

  const ExpenseItemCheck = () => {
    if (expenses.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expenses</h2>;
    }

    return expenses.map(expense => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    ));
  };

  return <ul className="expenses-list">{ExpenseItemCheck()}</ul>;
};

export default ExpensesList;
