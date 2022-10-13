import { legacy_createStore as createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'Increment') {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  } else if (action.type === 'Decrement') {
    if (state.counter - 1 < 0) {
      alert('0 이하로 카운터 할 수 없습니다');
      return state;
    }
    return { counter: state.counter - 1, showCounter: state.showCounter };
  } else if (action.type === 'Increase') {
    if (!action.amount) alert('1이상의 값을 입력해주세요');
    return { counter: state.counter + action.amount, showCounter: state.showCounter };
  } else if (action.type === 'toggleCounter') {
    return { counter: state.counter, showCounter: !state.showCounter };
  } else {
    return state;
  }
};

const store = createStore(counterReducer);
export default store;
