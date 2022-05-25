import React from 'react';
import PropTypes from 'prop-types';

const CountryCard = ({ map, country }) => (
  <div className="country-card flex flex--column">
    <i className="ri-arrow-right-circle-line" />
    <img src={map} alt="country map" />
    <div className="card-name flex flex--column">
      <h2>{country.country}</h2>
      <p>Air quality: {country.list[0].main.aqi}</p>
    </div>
  </div>
);

CountryCard.propTypes = {
  map: PropTypes.string.isRequired,
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.shape({
          aqi: PropTypes.string.isRequired,
        }),
      }),
    ),
  }).isRequired,
};

export default CountryCard;
