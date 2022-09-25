import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const cartStateChangHandler = () => setcartIsShown(!cartIsShown);

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={cartStateChangHandler} />}
      <Header onOpenCart={cartStateChangHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
