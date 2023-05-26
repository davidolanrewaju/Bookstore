import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { delBook, getBooks, deleteBook } from '../redux/books/bookSlice';

const BookList = () => {
  const { books, isLoading } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.item_id} className="book_list">
          {book.title}
          {' '}
          -
          {' '}
          {book.author}
          <button
            type="button"
            className="del_btn"
            onClick={() => {
              dispatch(delBook(book.item_id));
              dispatch(deleteBook(book.item_id));
            }}
          >
            Delete

          </button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
