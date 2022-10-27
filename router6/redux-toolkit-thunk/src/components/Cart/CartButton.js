import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';

const CartButton = props => {
  const uiDispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const toogleCartHandler = () => uiDispatch(uiActions.toggle());

  return (
    <button onClick={toogleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
