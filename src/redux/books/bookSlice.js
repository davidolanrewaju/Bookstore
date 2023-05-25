// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook: (store, action) => {
      store.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
