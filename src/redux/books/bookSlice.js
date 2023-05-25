// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook: (store) => {
      store.cartItems = [];
    },
  },
});

export default bookSlice.reducer;
