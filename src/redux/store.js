import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoriesSlice,
  },
});

export default store;
