import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/input/Input';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'USER_EMAIL') {
    return { ...state, email: action.val, emailIsValid: action.val.includes('@') };
  }
  if (action.type === 'EMAIL_BLUR') {
    return { ...state, emailIsValid: state.email.includes('@') };
  }
  if (action.type === 'USER_PASSWORD') {
    return { ...state, password: action.val, passwordIsValid: action.val.trim().length > 6 };
  }
  if (action.type === 'PASSWORD_BLUR') {
    return { ...state, passwordIsValid: state.password.trim().length > 6 };
  }
  return { ...state };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);

  const [userLoginState, dispatchLoginState] = useReducer(emailReducer, {
    email: '',
    emailIsValid: null,
    password: '',
    passwordIsValid: null,
  });

  const emailChangeHandler = event => {
    dispatchLoginState({ type: 'USER_EMAIL', val: event.target.value });
    // setFormIsValid(userLoginState.emailIsValid && userLoginState.passwordIsValid);
  };

  const passwordChangeHandler = event => {
    dispatchLoginState({ type: 'USER_PASSWORD', val: event.target.value });
    // setFormIsValid(userLoginState.emailIsValid && userLoginState.passwordIsValid);
  };

  const validateEmailHandler = () => {
    dispatchLoginState({ type: 'EMAIL_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchLoginState({ type: 'PASSWORD_BLUR' });
  };

  const submitHandler = event => {
    event.preventDefault();
    ctx.onLogin(userLoginState.emailIsValid, userLoginState.password);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(userLoginState.emailIsValid && userLoginState.passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [userLoginState.emailIsValid, userLoginState.passwordIsValid]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          value={userLoginState.email}
          IsValid={userLoginState.emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={userLoginState.password}
          IsValid={userLoginState.passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
