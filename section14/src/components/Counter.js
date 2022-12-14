import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const AMOUNT = 2;

  const toggleCounterHandler = () => dispatch(counterAction.toggleCounter());
  const incrementHandler = () => dispatch(counterAction.increment());
  const increaseHandler = () => dispatch(counterAction.increase({ AMOUNT }));
  const decrementHandler = () => dispatch(counterAction.decrement());
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter.showCounter && counter.counter} </div>
      <div>
        <button onClick={decrementHandler}>Decrease</button>
        <button onClick={incrementHandler}>Increase</button>
        <button onClick={increaseHandler}>Increase of {AMOUNT}</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
