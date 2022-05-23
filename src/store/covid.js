import { createSlice } from '@reduxjs/toolkit';

const baseURL = 'https://api.covid19tracking.narrativa.com/api/';
const inialState = [];

const slice = createSlice({
  name: 'covid',
  inialState: inialState,
});
