import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import React from 'react';

const Navigation = () => (
  <nav className="nav">
    <div className="left_section">
      <Link to="/" className="logo">Bookstore CMS</Link>
      <div className="nav_links">
        <ul className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/books" className="link">Books</Link>
          <Link to="/categories" className="link">Categories</Link>
        </ul>
      </div>
    </div>
    <div className="right_section">
      <p className="profile">Profile</p>
    </div>
  </nav>
);

export default Navigation;
