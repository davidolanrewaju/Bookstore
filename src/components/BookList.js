import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const BookList = ({ booksProp, delBook }) => (
  <ul>
    {booksProp.map((book) => (
      <BookCard key={book.id} bookProp={book} delBook={delBook} />
    ))}
  </ul>
);

BookList.propTypes = {
  booksProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookList;
