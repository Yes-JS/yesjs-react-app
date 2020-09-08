import React from 'react';
import { useStyles } from './styles';

export const SmallLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.smallDots}>
      <div className={`${classes.dot} ${classes.firstDot}`} />
      <div className={`${classes.dot} ${classes.secondDot}`} />
      <div className={`${classes.dot} ${classes.thirdDot}`} />
    </div>
  );
};
