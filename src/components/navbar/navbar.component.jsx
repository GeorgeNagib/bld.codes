import React from 'react';
import './navbar.styles.css';

const Navbar = () => (
  <nav className="nav">
    <ul className="list-unstyled item">
      <li>
        <a className="item__link item__link-active" href="#">
          home
        </a>
      </li>
      <li>
        <a className="item__link" href="#">
          PHILOSOPHY
        </a>
      </li>
      <li>
        <a className="item__link" href="#">
          PROJECTS
        </a>
      </li>
      <li>
        <a className="item__link" href="#">
          contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
