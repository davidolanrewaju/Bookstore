import PropTypes from 'prop-types';
import '../styles/AddBook.css';
import React, { useState } from 'react';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'author') {
      setAuthor(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      addBook(title.trim(), author.trim());
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="add_section">
      <div className="add">Add New Book</div>
      <div className="input_section">
        <form className="form_container" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input_content"
            placeholder="Book Title"
            name="title"
            value={title}
            onChange={onChange}
          />
          <input
            type="text"
            className="input_content"
            placeholder="Book Author"
            name="author"
            value={author}
            onChange={onChange}
          />
          <select name="category" id="category" onChange={onChange}>
            <option value="Category">Category</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Horror">Horror</option>
            <option value="Adventure">Adventure</option>
          </select>
          <input type="submit" className="submit_btn" value="Add Book" />
        </form>
      </div>
    </div>
  );
};

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBook;
