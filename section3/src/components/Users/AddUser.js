import { useState } from 'react';
import Card from '../Ui/Card';
import styles from './AddUser.module.css';
import Button from '../Ui/Button';

const AddUser = props => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');

  const addUserHandler = e => {
    e.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) return;
    if (+enteredUserAge < 1) return;
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  };

  const usernameChangeHandler = e => setEnteredUserName(e.target.value);

  const userAgeChangeHandler = e => setEnteredUserAge(e.target.value);

  return (
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
  );
};

export default AddUser;
