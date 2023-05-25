// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook: {
      reducer(store, action) {
        store.push(action.payload);
      },
      prepare(title, author) {
        return (
          {
            payload: {
              id: nanoid(),
              title,
              author,
            },
          }
        );
      },
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
