import { useState } from 'react';

const useInput = validateValue => {
  const [enteredValue, setenteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const ValueIsValid = validateValue(enteredValue);
  const hasError = !ValueIsValid && isTouched;
  const valueChangeHandler = e => setenteredValue(e.target.value);
  const InputBlurHandler = e => setIsTouched(true);

  const reset = () => {
    setenteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: ValueIsValid,
    hasError,
    valueChangeHandler,
    InputBlurHandler,
    reset,
  };
};

export default useInput;
