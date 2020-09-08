import { eventChannel } from 'redux-saga';
import { takeEvery, all, call, put, take, race } from 'redux-saga/effects';
import { Socket } from 'utils/socket';
import {
  connect,
  disconnect,
  socketMessage,
  getPosts,
  addCombination,
} from './index';

const WEBSOCKET = process.env.REACT_APP_BASE_WEBSOCKET || '';

function watchMessages(socket: Socket<unknown>, betSlipId: string) {
  return eventChannel((emitter) => {
    socket.add('SOCKET_CONNECTED', () => {
      socket.sendMessage({
        betSlipId,
      });
    });
    socket.add('SOCKET_MESSAGE', emitter);
    return () => {
      socket.disconnect();
    };
  });
}

function handleBetslipChanges(socket: Socket<unknown>, betSlipId: string) {
  socket.sendMessage({
    betSlipId,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* handleConnect({ payload }: any) {
  const socket = new Socket(WEBSOCKET);
  socket.connect();

  const socketChannel = yield call(watchMessages, socket, payload);

  yield takeEvery(
    [
      getPosts.fulfilled,
      addCombination.fulfilled,
      socketMessage,
    ],
    () => handleBetslipChanges(socket, payload),
  );

  while (true) {
    const { message, cancel } = yield race({
      message: take(socketChannel),
      cancel: take(disconnect)
    });

    if (cancel) {
      socketChannel.close();
    }
  }
}

export function* ticketOfferSaga() {
  yield all([takeEvery(connect, handleConnect)]);
}
