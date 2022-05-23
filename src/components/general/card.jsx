import React from 'react';

const card = ({ map }) => (
  <div className="country-card flex flex--column">
    <i className="ri-arrow-right-circle-line" />
    <img src={map} alt="country map" />
    <p>Country Name</p>
  </div>
);

export default card;
