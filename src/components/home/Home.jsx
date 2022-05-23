import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../store/app';
import euMap from '../../assets/images/eu-map.svg';
import './home.css';
import Card from '../general/Card';

const Home = () => {
  const data = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [data.list]);
  return (
    <section clasName="main-section">
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
        <div className="countries-cards grid">{(data.loading && <p>Loading</p>) || data.list.map((data) => <Card map={euMap} key={data.id} />)}</div>
      </div>
    </section>
  );
};

export default Home;
