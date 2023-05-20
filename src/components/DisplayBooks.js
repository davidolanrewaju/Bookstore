import React, { useState } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

const DisplayBooks = () => {
  const [books, setBooks] = useState([
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
  ]);

  const delBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  const addBook = (title, author) => {
    const newBook = {
      id: books.length + 1,
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <BookList booksProp={books} delBook={delBook} />
      <AddBook addBook={addBook} />
    </div>
  );
};

export default DisplayBooks;
