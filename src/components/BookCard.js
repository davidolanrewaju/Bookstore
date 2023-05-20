import PropTypes from 'prop-types';
import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ bookProp, delBook }) => (
  <li className="book_list">
    {bookProp.title}
    {' '}
    -
    {' '}
    {bookProp.author}
    <button type="button" className="del_btn" onClick={() => delBook(bookProp.id)}>Delete</button>
  </li>
);

BookCard.propTypes = {
  bookProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookCard;
