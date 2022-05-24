import React from 'react';
import PropTypes from 'prop-types';

const CountryCard = ({ map, country }) => (
  <div className="country-card flex flex--column">
    <i className="ri-arrow-right-circle-line" />
    <img src={map} alt="country map" />
    <p>{country.country}</p>
  </div>
);

CountryCard.propTypes = {
  map: PropTypes.string.isRequired,
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryCard;
