import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { delBook, getBooks, deleteBook } from '../redux/books/bookSlice';
import '../styles/BookList.css';

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
    <div className="book_container">
      <div className="book_lists">
        {books.map((book) => (
          <div key={book.item_id} className="book_list">
            <div className="book_details">
              <div className="book_detail">
                <p className="book_category">{book.category}</p>
                <h2 className="book_title">{book.title}</h2>
                <h4 className="book_author">{book.author}</h4>
              </div>
              <div className="book_operations">
                <p className="btn_style book_comment">Comments</p>
                <button
                  type="button"
                  className="btn_style book_remove"
                  onClick={() => {
                    dispatch(delBook(book.item_id));
                    dispatch(deleteBook(book.item_id));
                  }}
                >
                  Remove
                </button>
                <p className="btn_style book_edit">Edit</p>
              </div>
            </div>
            <div className="complete">
              <div className="progress_bar">
                <CircularProgressbar value={10} />
              </div>
              <div className="progress_detail">
                <p className="complete_percent">10%</p>
                <p className="complete_status">Completed</p>
              </div>
            </div>
            <div className="chapter_details">
              <div className="chapter_detail">
                <p className="current_chapter">Current Chapter</p>
                <h2 className="chapter_number">Chapter 1</h2>
                <button
                  type="button"
                  className="update_btn"
                >
                  Update Progress

                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
