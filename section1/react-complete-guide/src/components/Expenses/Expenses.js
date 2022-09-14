import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map((expense, i) => (
        <ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </Card>
  );
}
export default Expenses;
