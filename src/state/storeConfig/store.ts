import {Middleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import Logger from 'redux-logger';
import {IS_DEV_ENV} from '@image-loc/utils';
import appReducer from './rootReducer';

const configureAppStore = () => {
  const loggerMiddleware: Middleware = Logger;

  const appStore = configureStore({
    reducer: appReducer,
    middleware: IS_DEV_ENV ? [loggerMiddleware] : [],
    devTools: true,
  });

  return appStore;
};

const store = configureAppStore();

export {store};
