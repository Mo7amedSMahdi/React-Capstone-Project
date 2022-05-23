import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';
import { apiCallBegan } from './api';
import countryList from '../data/coutriesLatLong';

const appId = '47ae443f230aa695cca70832bae5b260';
const slice = createSlice({
  name: 'airPollution',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    dataRequested: (state) => {
      state.loading = true;
    },
    dataRequestFailed: (state) => {
      state.loading = false;
    },
    dataReceived: (state, action) => {
      console.log(action.payload);
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
  },
});

export const { dataRequested, dataRequestFailed, dataReceived } = slice.actions;

export default slice.reducer;

export const getData = () => async (dispatch) => {
  // const { lastFetch } = getState().missions;
  // console.log('dispatch');

  // const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  // if (diffInMinutes < 10) return;
  const countries = countryList.filter((country) => country.continent === 'Europe');
  dispatch(
    apiCallBegan({
      countries,
      appId,
      onStart: dataRequested.type,
      onSuccess: dataReceived.type,
      onError: dataRequestFailed.type,
    }),
  );
};
