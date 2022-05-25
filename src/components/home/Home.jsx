import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getData } from '../../store/pollution';
import euMap from '../../assets/images/eu-map.svg';
import './home.css';
import CountryCard from '../general/CountryCard';

const Home = () => {
  const data = useSelector((state) => state.pollution);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(search);
  let country = [];
  country = data.list.filter((country) => country.country.toLowerCase().includes(search.toLowerCase()));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [data.list]);

  const onSearchQueryChange = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearchQuery(event.target.value);
  };
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
        <div className="header-search">
          <input type="search" className="input-search" placeholder="Search by country name" value={searchQuery} onChange={onSearchQueryChange} />
        </div>
        <div className="countries-cards grid">
          {(data.loading && <p>Loading</p>) ||
            (country.length > 0 &&
              country.map((data) => (
                <Link key={data.id} to={{ pathname: `/country/${data.country}` }}>
                  <CountryCard map={data.map} country={data} />
                </Link>
              ))) || <p className="no-result">No Match</p>}
        </div>
      </div>
    </section>
  );
};

export default Home;
