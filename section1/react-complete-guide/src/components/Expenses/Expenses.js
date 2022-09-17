import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';

function Expenses(props) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const changeYearHandler = year => setCurrentYear(year);

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={changeYearHandler} />
      <ExpensesList expenses={props.expenses} currentYear={currentYear} />
    </Card>
  );
}
export default Expenses;
