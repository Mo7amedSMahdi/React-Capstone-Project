import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import api from './middleware/api';
import pollution from './pollution';

const rootReducer = combineReducers({
  pollution,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, logger],
});

export default store;
