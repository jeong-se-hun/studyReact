import { useReducer } from 'react';

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return { value: action.value, isTouched: state.isTouched };
    case 'blur':
      return { value: state.value, isTouched: action.value };
    case 'reset':
      return { value: '', isTouched: false };

    default:
      return { value: '', isTouched: false };
  }
};

const useBasic = valueIsValid => {
  const [inputState, dispatchInputState] = useReducer(inputStateReducer, { value: '', isTouched: false });

  const isValid = valueIsValid(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const changedValue = e => dispatchInputState({ type: 'value', value: e.target.value });
  const touchedInput = () => dispatchInputState({ type: 'blur', value: true });

  const reset = () => dispatchInputState({ type: 'reset' });

  return {
    value: inputState.value,
    isValid,
    hasError,
    changedValue,
    touchedInput,
    reset,
  };
};

export default useBasic;
