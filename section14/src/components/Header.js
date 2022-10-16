import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store/auth';

const Header = () => {
  const authDispatch = useDispatch();
  const logoutHandler = () => authDispatch(authAction.logout());
  const isAuth = useSelector(state => state.auth);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth.isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
