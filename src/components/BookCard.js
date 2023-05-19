/* eslint-disable react/prop-types */
import React from 'react';

const BookCard = ({ bookProp }) => (
  <li>
    {bookProp.title}
    {' '}
    -
    {' '}
    {bookProp.author}
  </li>
);

export default BookCard;
