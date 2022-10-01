import { useState, useRef, useEffect } from 'react';

const SimpleInput = props => {
  const [enterdName, setEnterdName] = useState('');
  const [enterdNameIsValid, setEnterdNameIsValid] = useState(false);
  const [enterdNameTouched, setEnterdNameTouched] = useState(false); //setEnterdNameIsValid] = useState(false);
  const inputRef = useRef();

  const nameChangeHandler = e => setEnterdName(e.target.value);

  useEffect(() => {
    if (enterdNameIsValid && enterdNameTouched) {
      console.log('Name Input is valid');
    }
  });

  const submitHandler = e => {
    e.preventDefault();
    setEnterdNameTouched(true);

    if (enterdName.trim() === '') {
      setEnterdNameIsValid(false);
      return;
    }

    setEnterdNameIsValid(true);

    alert(inputRef.current.value);
  };

  const nameInputBlurHandler = e => {
    setEnterdNameTouched(true);

    if (enterdName.trim() === '') {
      setEnterdNameIsValid(false);
      return;
    }
    setEnterdNameIsValid(true);
  };
  const nameInputIsInvalid = !enterdNameIsValid && enterdNameTouched;

  const mameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={mameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enterdName}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
