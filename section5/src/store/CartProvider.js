import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    if (existingCartItemIndex >= 0) {
      state.items[existingCartItemIndex].amount += action.item.amount;
      return { items: state.items, totalAmount: updateTotalAmount };
    }
    return { items: [...state.items, action.item], totalAmount: updateTotalAmount };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    state.totalAmount -= state.items[existingCartItemIndex].price;

    if (state.items[existingCartItemIndex].amount === 1)
      return { items: state.items.filter(item => item.id !== action.id), totalAmount: state.totalAmount };

    state.items[existingCartItemIndex].amount -= 1;
    return { ...state };
  }

  return defaultCartState;
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
