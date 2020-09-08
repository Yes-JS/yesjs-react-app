import makeStyles from '@material-ui/core/styles/makeStyles';

export const useTabsStyles = makeStyles({
  root: {
    textTransform: 'none',
    color: '#fff',
    backgroundColor: '#151515',
    minHeight: '32px',
  },
  indicator: {
    display: 'none',
  },
});

export const useTabStyles = makeStyles({
  root: {
    textTransform: 'none',
    color: '#fff',
    backgroundColor: '#323232',
    minWidth: '60px',
    maxWidth: '62px',
    width: '100%',
    minHeight: '32px',
    boxSizing: 'border-box',
    padding: 0,
    marginRight: '1px',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    '&:first-child': {
      width: '60px',
      backgroundColor: '#2AA1F7',
    },
    '&:last-child': {
      marginRight: '0',
    },
  },
});
