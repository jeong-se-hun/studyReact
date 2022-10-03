import useBasic from '../hooks/use-basic';

const BasicForm = props => {
  const {
    value: fNameValue,
    isValid: fNameisValid,
    hasError: fNameHasError,
    changedValue: fNameChangeHandler,
    touchedInput: fNameTouchedHandler,
    reset: fNameReset,
  } = useBasic(value => value.trim() !== '');
  const {
    value: lNameValue,
    isValid: lNameisValid,
    hasError: lNameHasError,
    changedValue: lNameChangeHandler,
    touchedInput: lNameTouchedHandler,
    reset: lNameReset,
  } = useBasic(value => value.trim() !== '');
  const {
    value: emailValue,
    isValid: emailisValid,
    hasError: emailHasError,
    changedValue: emailChangeHandler,
    touchedInput: emailTouchedHandler,
    reset: emailReset,
  } = useBasic(value => value.includes('@'));

  let formIsValid = false;

  const submitHandler = e => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log(fNameValue, lNameValue, emailValue);

    fNameReset();
    lNameReset();
    emailReset();
  };

  const fNameClasses = fNameHasError ? 'form-control invalid' : 'form-control';
  const lNameClasses = lNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  if (fNameisValid && lNameisValid && emailisValid) formIsValid = true;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fNameClasses}>
          <label htmlFor="fname">First Name</label>
          <input value={fNameValue} onBlur={fNameTouchedHandler} onChange={fNameChangeHandler} type="text" id="fname" />
          {fNameHasError && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={lNameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input value={lNameValue} onBlur={lNameTouchedHandler} onChange={lNameChangeHandler} type="text" id="lname" />
          {lNameHasError && <p className="error-text">Name must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input value={emailValue} onBlur={emailTouchedHandler} onChange={emailChangeHandler} type="email" id="email" />
        {emailHasError && <p className="error-text">Please check your email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
