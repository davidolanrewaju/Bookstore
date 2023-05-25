import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.push(action.payload);
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
    delBook: (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
