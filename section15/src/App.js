import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart-actions';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

function App() {
  const uiDispatch = useDispatch();
  const cartDispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsvisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    cartDispatch(fetchCartData());
  }, [cartDispatch]);

  useEffect(() => {
    if (cart.changed) uiDispatch(sendCartData(cart));
  }, [cart, uiDispatch]);

  return (
    <>
      {notification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
