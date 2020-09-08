type SocketEventListener<S> = (message: Socket<S>) => void;

interface SocketEvents<S> {
  SOCKET_CONNECTED: SocketEventListener<S>[];
  SOCKET_DISCONNECTED: SocketEventListener<S>[];
  SOCKET_MESSAGE: SocketEventListener<S>[];
}

/* eslint-disable no-underscore-dangle */
export class Socket<S> {
  private _socket?: WebSocket = undefined;

  url: string;

  private handlers: SocketEvents<S> = {
    SOCKET_CONNECTED: [],
    SOCKET_DISCONNECTED: [],
    SOCKET_MESSAGE: [],
  };

  constructor(url: string) {
    this.url = url;
  }

  connect() {
    if (this._socket) {
      this._socket.close();
      this.disconnect();
    }

    this._socket = new WebSocket(this.url);
    this._socket.onopen = () => {
      this.connected();
    };

    this._socket.onclose = (e) => {
      if (e.code === 1005 || e.code === 1006) {
        this.disconnect();
      } else {
        this.reconnect();
      }
    };

    this._socket.onmessage = (e) => {
      this.message(JSON.parse(e.data));
    };

    this._socket.onerror = (e) => {
      console.error('ERROR_SOCKET', e);
    };
  }

  connected() {
    this.emit('SOCKET_CONNECTED');
  }

  add<S>(messageType: keyof SocketEvents<S>, handler: SocketEventListener<S>) {
    this.handlers[messageType].push(handler);
  }

  private reconnect() {
    setTimeout(() => {
      this.connect();
    }, 1000);
  }

  disconnect() {
    if (this._socket) {
      this._socket.close();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message(message: any) {
    this.emit('SOCKET_MESSAGE', message);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendMessage(data: any) {
    if (this._socket) {
      this._socket.send(JSON.stringify(data));
    }
  }

  private emit(status: keyof SocketEvents<S>, ...rest: any[]) {
    this.handlers[status].forEach((handler) => {
      (handler as Function).apply(this, rest);
    });
  }
}

/* eslint-enable no-underscore-dangle */
