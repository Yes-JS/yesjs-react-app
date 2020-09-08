import * as React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getPosts, connect, socketMessage } from 'models/betslip';
import { useAppDispatch } from 'store';

export const Home = () => {
  const dispatch = useAppDispatch();

  const click = () => {
    dispatch(getPosts());
  }

  const socketClick = () => {
    dispatch(socketMessage('socket message'));
  }
  React.useEffect(() => {
    console.log('main component here')
    dispatch(connect('test'));
  }, []);

  return (
    <div>
      <button type="button" onClick={click}>
        get posts
      </button>
      <button type="button" onClick={socketClick}>
        socket
      </button>
      home
    </div>
  );
};
