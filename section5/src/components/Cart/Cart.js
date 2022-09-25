import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../Ui/Modal';
import styles from './Cart.module.css';

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const CartItemRemoveHandler = id => cartCtx.removeItem(id);
  const CartItemAddHandler = item => cartCtx.addItem({ ...item, amount: 1 });

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={CartItemRemoveHandler.bind(null, item.id)}
          onAdd={CartItemAddHandler.bind(null, item)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCloseCart} className={styles['button--alt']}>
          Close
        </button>
        {hasItems && <button className={styles['button']}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
