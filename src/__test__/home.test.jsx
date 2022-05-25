import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../components/home/Home';
import store from '../store/configureStore';
import { dataRequested } from '../store/pollution';

describe('Home tests', () => {
  it('render home', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should return datarequested actoin', () => {
    const actoin = dataRequested.type;
    expect(actoin).toBe('airPollution/dataRequested');
  });
});
