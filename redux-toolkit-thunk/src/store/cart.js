import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartData = createAsyncThunk('cartSlice/fetchCartData', async () => {
  const response = await fetch('https://react-http-258ae-default-rtdb.firebaseio.com/cart.json');
  if (!response.ok) throw new Error('error');
  return await response.json();
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    fetchError: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.changed = true;
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity;
    });
    builder.addCase(fetchCartData.rejected, (state, action) => {
      state.fetchError = true;
    });
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
