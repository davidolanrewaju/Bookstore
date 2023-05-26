import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oxD9wpgPJPrVlblpPp3x/books';

export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
  try {
    const response = await axios.get(url);
    const booksArray = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    return booksArray;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const postBook = createAsyncThunk('book/postBooks', async (book, thunkAPI) => {
  try {
    const response = await axios.post(url, book);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  await axios.delete(`${url}/${bookId}`);
  return bookId;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    delBook: (state, action) => {
      const bookId = action.payload;
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.item_id !== bookId);
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook } = bookSlice.actions;
export const { delBook } = bookSlice.actions;
export default bookSlice.reducer;
