import { useState, useRef } from 'react';
import Card from '../Ui/Card';
import Button from '../Ui/Button';
import ErrorModal from '../Ui/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = e => {
    e.preventDefault();

    const enterdName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enterdName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    props.onAddUser(enterdName, enteredAge);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = e => setError(null);

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input ref={nameInputRef} id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input ref={ageInputRef} id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
