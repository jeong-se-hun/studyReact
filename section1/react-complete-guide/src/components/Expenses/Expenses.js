import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

function Expenses(props) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const changeYearHandler = year => setCurrentYear(year);

  const filteredExpenses = props.expenses.filter(expenses => expenses.date.getFullYear() === currentYear);

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={changeYearHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
