import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../store/configureStore';
import App from '../App';

describe('App component', () => {
  test('renders', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
