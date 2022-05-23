import axios from 'axios';
import * as actions from '../api';
const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL,
        url,
        method,
        data,
      });
      // // General
      dispatch(actions.apiCallSuccess(response.data));
      // Specific
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (onError) dispatch({ type: onError, payload: error.message });
    }

    return false;
  };

export default api;