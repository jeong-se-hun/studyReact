import { Component } from 'react';
import UserFinder from './UserFinder';

import classes from './Users.module.css';

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { showUsers: true, more: false };
  }

  toggleUsersHandler() {
    this.setState(curState => ({ showUsers: !curState.showUsers }));
  }

  usersList() {
    return (
      <ul>
        {this.props.users.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>{this.state.showUsers ? 'Hide' : 'Show'} Users</button>
        {this.state.showUsers && this.usersList()}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers(curState => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map(user => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>{showUsers ? 'Hide' : 'Show'} Users</button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
