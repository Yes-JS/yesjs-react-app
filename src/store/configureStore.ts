import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './rootSaga';
import { history } from '../utils/history';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
  immutableCheck: { warnAfter: 100 },
});
const store = configureStore({
  reducer,
  middleware: defaultMiddleware.concat(
    sagaMiddleware,
    routerMiddleware(history),
  ),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor };

export default store;
