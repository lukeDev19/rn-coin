import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';

import {rootReducer} from './stores';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const customConfigureStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });
  sagas.forEach((saga) => sagaMiddleware.run(saga));
  return {Provider, store};
};
