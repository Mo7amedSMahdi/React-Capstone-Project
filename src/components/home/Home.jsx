import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../store/app';

const Home = () => {
  const data = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [data.list]);
  return <div>{(data.loading && <p>Loading</p>) || data.list.map((data) => <p key={data.id}>{data.coord.lon}</p>)}</div>;
};

export default Home;
