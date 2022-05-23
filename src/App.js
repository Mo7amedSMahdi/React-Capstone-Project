import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Home />
      </main>
    </Provider>
  );
}

export default App;
