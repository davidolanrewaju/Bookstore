/* eslint-disable react/prop-types */
import React from 'react';
import BookCard from './BookCard';

const BookList = ({ booksProp, delBook }) => (
  <ul>
    {booksProp.map((book) => (
      <BookCard key={book.id} bookProp={book} delBook={delBook} />
    ))}
  </ul>
);

export default BookList;
