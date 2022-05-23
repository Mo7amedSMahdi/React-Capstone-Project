import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'airPollution',
  inialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducer: {
    dataRequested: (state) => {
      state.loading = true;
    },
    dataRequestFailed: (state) => {
      state.loading = false;
    },
    dataReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
  },
});

export { dataRequested, dataRequestFailed, dataReceived } = slice.actions

export default slice.reducer;

export const getData = () => async (dispatch, getState) => {
  const { lastFetch } = getState().missions;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: dataRequested.type,
      onSuccess: dataReceived.type,
      onError: dataRequestFailed.type,
    }),
  );
};