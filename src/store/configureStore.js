import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import api from './middleware/api';
import appInfo from './app';

const rootReducer = combineReducers({
  app: appInfo,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export default store;
