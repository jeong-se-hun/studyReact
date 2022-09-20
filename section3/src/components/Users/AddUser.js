import { useState } from 'react';
import Card from '../Ui/Card';
import Button from '../Ui/Button';
import ErrorModal from '../Ui/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = e => {
    e.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  };

  const usernameChangeHandler = e => setEnteredUserName(e.target.value);

  const userAgeChangeHandler = e => setEnteredUserAge(e.target.value);

  const errorHandler = e => setError(null);

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input value={enteredUserName} onChange={usernameChangeHandler} id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input value={enteredUserAge} onChange={userAgeChangeHandler} id="age" type="number" />
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
