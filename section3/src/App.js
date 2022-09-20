import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUserList] = useState([]);
  const adUserHandler = (uName, uAge) => {
    setUserList(prevUserList => {
      return [...prevUserList, { name: uName, age: uAge, id: (Math.random() * Math.random()).toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={adUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
