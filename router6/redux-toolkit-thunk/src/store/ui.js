import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const sendCartData = createAsyncThunk('uiSlice/sendCartData', async cart => {
  const response = await fetch('https://react-http-258ae-default-rtdb.firebaseio.com/cart.json', {
    method: 'PUT',
    body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),
  });
  return await response.json();
});

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsvisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsvisible = !state.cartIsvisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
  extraReducers: builder => {
    console.log(builder);
    builder.addCase(sendCartData.pending, (state, action) => {
      state.notification = {
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      };
    });
    builder.addCase(sendCartData.fulfilled, (state, action) => {
      state.notification = {
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully',
      };
    });
    builder.addCase(sendCartData.rejected, (state, action) => {
      state.notification = {
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed',
      };
    });
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
