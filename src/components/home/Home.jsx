import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../../store/pollution';
import euMap from '../../assets/images/eu-map.svg';
import './home.css';
import CountryCard from '../general/CountryCard';

const Home = () => {
  const data = useSelector((state) => state.pollution);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [data.list]);
  return (
    <section className="main-section">
      {data.loading && (
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
      <div className="main-header flex flex--column">
        <div className="header-intro flex">
          <img src={euMap} alt="Europe map mask" />
          <div className="intro-title flex flex--column">
            <h2>Europe</h2>
            <p>Population: 746.4 million</p>
          </div>
        </div>
      </div>
      <div className="countries">
        <div className="countries-title">
          <p>Select country to show Air quality</p>
        </div>
        <div className="countries-cards grid">
          {(data.loading && <p>Loading</p>) ||
            data.list.map((data) => (
              <Link key={data.id} to={{ pathname: `/country/${data.country}` }}>
                <CountryCard map={euMap} country={data} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
