import { Fragment, useState, useEffect, Component } from 'react';
import styles from './UserFinder.module.css';

import Users from './Users';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
  { id: 'u4', name: 'secoon' },
];

class UserFinder extends Component {
  constructor(props) {
    super(props);
    this.state = { filteredUsers: DUMMY_USERS, searchTerm: '' };
  }

  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter(user => user.name.includes(this.state.searchTerm)),
      });
    }
  }

  render() {
    return (
      <Fragment>
        <input className={styles.finder} type="search" onChange={this.searchChangeHandler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(DUMMY_USERS.filter(user => user.name.includes(searchTerm)));
//   }, [searchTerm]);

//   const searchChangeHandler = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input className={styles.finder} type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
