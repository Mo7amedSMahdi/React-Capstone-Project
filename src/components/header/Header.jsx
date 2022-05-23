import React from 'react';
import './header.css';

const Header = () => (
  <header className="header flex">
    <h1>Eu Air Pollution</h1>
    <ul className="nav nav--buttons">
      <li>
        <button type="button" className="btn">
          <i className="ri-mic-line" />
        </button>
      </li>
      <li>
        <button type="button" className="btn">
          <i className="ri-settings-2-line" />
        </button>
      </li>
    </ul>
  </header>
);

export default Header;
