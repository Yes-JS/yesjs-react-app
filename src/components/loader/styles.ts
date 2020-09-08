import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles({
  loaderWrapper: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 3,
    opacity: 0.85,
    background: '#151515',
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },
  smallDots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    minWidth: '8px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#eee',
    margin: '2px',
  },
  firstDot: {
    animation: `$dot1 1.4s infinite both`,
  },
  secondDot: {
    animation: `$dot1 1.4s infinite both`,
    animationDelay: '0.2s',
  },
  thirdDot: {
    animation: `$dot1 1.4s infinite both`,
    animationDelay: '0.4s',
  },
  '@keyframes dot1': {
    '0%': {
      background: '#646e74',
    },
    '50%': {
      background: '#38876f',
    },
    '100%': {
      background: '#0e2d21',
    },
  },
});
