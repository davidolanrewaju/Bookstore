/* eslint-disable react/prop-types */
import React from 'react';
import BookCard from './BookCard';

const BookList = ({ booksProp }) => (
  <ul>
    {booksProp.map((book) => (
      <BookCard key={book.id} bookProp={book} />
    ))}
  </ul>
);

export default BookList;
