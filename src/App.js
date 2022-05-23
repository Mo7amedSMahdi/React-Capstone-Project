import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Home from './components/home/Home';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
