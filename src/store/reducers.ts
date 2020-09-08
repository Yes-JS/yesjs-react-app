import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { mock } from 'models/mock';
import { history } from 'utils/history';
import { cashOut } from 'models/cashOut';

const rootReducer = combineReducers({
  form: formReducer,
  router: connectRouter(history),
  [mock.name]: mock.reducer,
  [cashOut.name]: cashOut.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
