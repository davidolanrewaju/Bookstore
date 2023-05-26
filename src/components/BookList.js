import { useSelector, useDispatch } from 'react-redux';
import { delBook } from '../redux/books/bookSlice';

const BookList = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const deleteBook = (bookId) => {
    dispatch(delBook(bookId));
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} className="book_list">
          {book.title}
          {' '}
          -
          {' '}
          {book.author}
          <button type="button" className="del_btn" onClick={() => deleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
