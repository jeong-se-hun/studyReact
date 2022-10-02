import useInput from '../hooks/use-input';

const SimpleInput = props => {
  const {
    value: enterdName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    InputBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: enterdEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    InputBlurHandler: emailBlurHandler,
    reset: emailnputReset,
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const mameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  const submitHandler = e => {
    e.preventDefault();
    if (nameInputHasError || emailInputHasError) return;
    console.log(enterdName, enterdEmail);
    nameInputReset();
    emailnputReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={mameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enterdName} type="text" id="name" />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enterdEmail} type="email" id="email" />
        {emailInputHasError && <p className="error-text">Please check your email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
