import React from 'react';

function Navigation() {
  return (
    <nav className="nav">
      <div className="left_section">
        <div className="logo">Bookstore CMS</div>
        <div className="nav_links">
          <ul className="links">
            <a href="/" className="link">Books</a>
            <a href="/" className="link">Categories</a>
          </ul>
        </div>
      </div>
      <div className="right_section">
        <p className="profile">Profile</p>
      </div>
    </nav>
  );
}

export default Navigation;
