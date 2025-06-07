import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaulutMiddleware =>
    getDefaulutMiddleware({
      serializableCheck: false,
    }),
});

export default store;
