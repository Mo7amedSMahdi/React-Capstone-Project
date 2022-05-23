import axios from 'axios';
import * as actions from '../api';

// const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { onStart, onSuccess, onError, appId, countries } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      let dataObj = [];
      axios
        .all(
          countries.map(async (country) => {
            const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${country.latitude}&lon=${country.longitude}&appid=${appId}`;
            return axios.get(url);
          }),
        )
        .then(
          axios.spread((...response) => {
            dataObj = response.map((r) => r.data);
            dispatch({ type: onSuccess, payload: dataObj });
          }),
        );
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (onError) dispatch({ type: onError, payload: error.message });
    }

    return false;
  };

export default api;
