import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // const [counter, showCounter] = useSelector(state => [state.counter, state.showCounter]);
  const [counter, showCounter] = useSelector(state => [state.counter, state.showCounter]);

  const toggleCounterHandler = () => dispatch({ type: 'toggleCounter' });
  const incrementHandler = () => dispatch({ type: 'Increment' });
  const increaseHandler = () => dispatch({ type: 'Increase', amount: 5 });
  const decrementHandler = () => dispatch({ type: 'Decrement' });
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {showCounter && counter} </div>
      <div>
        <button onClick={decrementHandler}>Decrease</button>
        <button onClick={incrementHandler}>Increase</button>
        <button onClick={increaseHandler}>Increase of 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
