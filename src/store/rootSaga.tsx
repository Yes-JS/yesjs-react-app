import { fork } from 'redux-saga/effects';
import { ticketOfferSaga } from 'models/betslip/saga';

export default function* root() {
  // eslint-disable-next-line no-console
  console.log('> Root saga started');

  yield fork(ticketOfferSaga);
}
