import React from 'react';
import './details.css';
import euMap from '../../assets/images/eu-map.svg';

const Details = () => (
  <section className="country-details">
    <div className="main-header flex flex--column">
      <div className="header-intro flex">
        <img src={euMap} alt="Europe map mask" />
        <div className="intro-title flex flex--column">
          <h2>Europe</h2>
          <p>Population: 746.4 million</p>
        </div>
      </div>
    </div>
    <div className="detials flex flex--column">
      <div className="detials-title">
        <p>Air Pollution:</p>
      </div>
      <div className="parameters flex flex--column">
        <ul className="parameters-list flex flex--column">
          <li className="list-parameter flex">
            <p>Air quality</p>
            <p>Good</p>
          </li>
          <li className="list-parameter flex">
            <p>
              NO
              <sup>2</sup>
            </p>
            <p>Good</p>
          </li>
          <li className="list-parameter flex">
            <p>
              PM
              <sup>10</sup>
            </p>
            <p>Good</p>
          </li>
          <li className="list-parameter flex">
            <p>
              O<sup>3</sup>
            </p>
            <p>Good</p>
          </li>
          <li className="list-parameter flex">
            <p>
              PM
              <sup>25</sup>
            </p>
            <p>Good</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Details;
