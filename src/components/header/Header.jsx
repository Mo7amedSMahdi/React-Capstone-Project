import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();
  const isDetails = location.pathname.includes('/country/');
  return (
    <header className="header flex">
      <div className="header-title flex">
        {isDetails ? (
          <Link to="/">
            <i className="ri-arrow-left-s-line" />
          </Link>
        ) : null}
        <h1>Eu Air Pollution</h1>
      </div>
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
};

export default Header;
