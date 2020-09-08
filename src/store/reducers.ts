import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { betslip } from 'models/betslip';
import { history } from 'utils/history';
import { cashOut } from 'models/cashOut';

const rootReducer = combineReducers({
  form: formReducer,
  router: connectRouter(history),
  [betslip.name]: betslip.reducer,
  [cashOut.name]: cashOut.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
