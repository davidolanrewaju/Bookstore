import React from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

const DisplayBooks = () => {
  const books = [
    {
      id: 1,
      title: 'Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Harry Potter',
      author: 'J.K Rowling',
    },
  ];

  return (
    <div>
      <AddBook />
      <BookList booksProp={books} />
    </div>
  );
};

export default DisplayBooks;
