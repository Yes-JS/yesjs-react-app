import React from 'react';
import { useStyles } from './styles';

export const FullscreenLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.dots}>
        <div className={`${classes.dot} ${classes.firstDot}`} />
        <div className={`${classes.dot} ${classes.secondDot}`} />
        <div className={`${classes.dot} ${classes.thirdDot}`} />
      </div>
    </div>
  );
};
