import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { apiCallBegan } from './api';
import countries from '../data/coutriesLatLong';

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
      state.list = action.payload.map((data, index) => {
        if (data.coord.lat === countries[index].latitude) {
          switch (data.list[0].main.aqi) {
            case 1:
              data.list[0].main.aqi = 'Good';
              break;
            case 2:
              data.list[0].main.aqi = 'Fair';
              break;
            case 3:
              data.list[0].main.aqi = 'Moderate';
              break;
            case 4:
              data.list[0].main.aqi = 'Poor';
              break;
            case 5:
              data.list[0].main.aqi = 'Very Poor';
              break;
            default:
              break;
          }
          return { ...data, country: countries[index].country, map: countries[index].map };
        }
      });
      state.loading = false;
      state.lastFetch = Date.now();
    },
    getCountry: (state, action) => {
      state.list.filter((p) => p.country === action.payload);
    },
  },
});

export const { dataRequested, dataRequestFailed, dataReceived, getCountry } = slice.actions;

export default slice.reducer;

export const getData = () => async (dispatch, getState) => {
  const { lastFetch } = getState().pollution;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;

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
