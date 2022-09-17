import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const { date, title, amount } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <Card className="expense-item__price">${amount}</Card>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
