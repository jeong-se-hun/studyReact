import { useRef, useState } from 'react';

import styles from './MealItemForm.module.css';
import Input from '../../Ui/Input';

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;

    if (enteredAmount.trim().length === 0 || +enteredAmount < 1 || +enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.onAddToCart(+enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amout"
        input={{ id: 'Amount' + props.id, type: 'number', min: 1, max: 5, step: 1, defaultValue: '1' }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amout (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
