/* eslint-disable react/prop-types */
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

export default BookCard;
