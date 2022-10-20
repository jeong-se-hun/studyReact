// export const fetchCartData = () => {
//   return async dispatch => {
//     const fetchData = async () => {
//       const response = await fetch('https://react-http-258ae-default-rtdb.firebaseio.com/cart.json');
//       if (!response.ok) throw new Error('Could not fetch cart data');

//       return await response.json();
//     };
//     try {
//       const data = await fetchData();
//       dispatch(
//         cartActions.replaceCart({
//           items: data.items || [],
//           totalQuantity: data.totalQuantity,
//         })
//       );
//     } catch (err) {
//       dispatch(
//         uiActions.showNotification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Fetching cart data failed',
//         })
//       );
//     }
//   };
// };
