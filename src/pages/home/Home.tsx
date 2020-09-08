import * as React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  testGet,
  connect,
  socketMessage,
  testPost,
  useMockDataSelector,
} from 'models/mock';
import { useAppDispatch } from 'store';

export const Home = () => {
  const dispatch = useAppDispatch();
  const data = useMockDataSelector();

  const clickGet = () => {
    dispatch(testGet({ id: '5' }));
  };

  const clickPost = () => {
    dispatch(testPost());
  };

  const socketClick = () => {
    dispatch(socketMessage('socket message'));
  };

  const logData = () => {
    console.log(`actual data is : `, data);
  };

  React.useEffect(() => {
    dispatch(connect('test'));
    console.log('initial mock data: ', data);
  }, []);

  React.useEffect(() => {
    console.log('new mock data: ', data);
  }, [data]);

  return (
    <div>
      <button type="button" onClick={clickGet}>
        get
      </button>
      <button type="button" onClick={clickPost}>
        post
      </button>
      <button type="button" onClick={socketClick}>
        socket
      </button>
      <button type="button" onClick={logData}>
        log data
      </button>
      home
    </div>
  );
};
