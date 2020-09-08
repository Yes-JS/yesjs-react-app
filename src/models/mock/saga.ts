import { eventChannel } from 'redux-saga';
import { takeEvery, all, call, put, take, race } from 'redux-saga/effects';
import { Socket } from 'utils/socket';
import {
  connect,
  disconnect,
  socketMessage,
  testGet,
  testPost,
  socketUpdate,
} from './index';

const WEBSOCKET = process.env.REACT_APP_BASE_WEBSOCKET || '';

function watchMessages(socket: Socket<unknown>, payload: string) {
  return eventChannel((emitter) => {
    socket.add('SOCKET_CONNECTED', () => {
      socket.sendMessage({
        payload,
      });
    });
    socket.add('SOCKET_MESSAGE', emitter);
    return () => {
      socket.disconnect();
    };
  });
}

function sendSocketMessage(socket: Socket<unknown>, payload: string) {
  socket.sendMessage({
    payload,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* handleConnect({ payload }: any) {
  const socket = new Socket(WEBSOCKET);
  socket.connect();

  const socketChannel = yield call(watchMessages, socket, payload);

  yield takeEvery([testGet.fulfilled, testPost.fulfilled], () =>
    sendSocketMessage(socket, payload),
  );

  while (true) {
    const { messageFromSocket, messageToSocket, cancel } = yield race({
      messageFromSocket: take(socketChannel),
      messageToSocket: take(socketMessage),
      cancel: take(disconnect),
    });

    if (cancel) {
      socketChannel.close();
    } else if (messageFromSocket) {
      yield put(socketUpdate(messageFromSocket.payload));
    } else if (messageToSocket) {
      sendSocketMessage(socket, 'test message to socket');
    }
  }
}

export function* ticketOfferSaga() {
  yield all([takeEvery(connect, handleConnect)]);
}
