import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Detail from './components/details/Details';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<Detail />} />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;
