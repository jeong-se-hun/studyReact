import { useContext, useEffect, useState } from 'react';
import styles from './HeaderCarButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCarButton = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (cartCtx.totalAmount === 0) return;

    setBtnIsHighlighted(true);
    const timer = setTimeout(() => setBtnIsHighlighted(false), 300);
    return () => clearTimeout(timer);
  }, [cartCtx.totalAmount]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCarButton;
