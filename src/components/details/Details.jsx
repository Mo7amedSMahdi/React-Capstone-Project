import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getData } from '../../store/pollution';
import './details.css';
// import euMap from '../../assets/images/eu-map.svg';

const Details = () => {
  const pollution = useSelector((state) => state.pollution);
  const location = useLocation();
  const dispatch = useDispatch();
  const tmp = location.pathname.slice(location.pathname.lastIndexOf('/') + 1, location.pathname.length);
  const country = pollution.list.find((country) => country.country === tmp);
  useEffect(() => {
    if (pollution.list.length <= 0) dispatch(getData());
  }, [location]);
  return (
    <section className="country-details">
      {pollution.loading && (
        <div className="gooey">
          <div className="gooey-container">
            <span className="dot" />
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}
      {country && (
        <>
          <div className="main-header flex flex--column">
            <div className="header-intro flex">
              <img src={country.map} alt="Europe map mask" />
              <div className="intro-title flex flex--column">
                <h2>{country.country}</h2>
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
                  <p>{country.list[0].main.aqi}</p>
                </li>
                <li className="list-parameter flex">
                  <p>
                    NO
                    <sup>2</sup>
                  </p>
                  <p>{country.list[0].components.no}</p>
                </li>
                <li className="list-parameter flex">
                  <p>
                    PM
                    <sup>10</sup>
                  </p>
                  <p>{country.list[0].components.pm10}</p>
                </li>
                <li className="list-parameter flex">
                  <p>
                    O<sup>3</sup>
                  </p>
                  <p>{country.list[0].components.o3}</p>
                </li>
                <li className="list-parameter flex">
                  <p>
                    PM
                    <sup>25</sup>
                  </p>
                  <p>{country.list[0].components.pm2_5}</p>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Details;
