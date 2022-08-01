import React from 'react';
import Navbar from '../navbar/navbar.component';
import './header.styles.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo">
        <a href="#">bld.codes</a>
      </div>
      <div className="header-content">
        <h1 className="heading-1">
          <span>WE BUILD WHAT MATTERS</span> <br /> <span>WE BUILD CODES</span>
        </h1>
        <span className="idea">you think of great ideas, we make it alive</span>
      </div>
      <Navbar />
    </div>
  </header>
);
export default Header;
