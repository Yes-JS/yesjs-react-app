import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'light',
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        background: '#323232',
        border: '1px solid #414141',
        boxSizing: 'border-box',
        borderRadius: '2px',
        '&$error': {
          borderColor: '#FF0000',
        },
      },
      notchedOutline: {
        border: 'none',
      },
      input: {
        padding: '12px 24px 12px 16px',
      },
      inputMarginDense: {
        padding: '12px 32px 12px 16px',
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          color: '#2AA1F7',
          backgroundColor: 'unset',
        },
        '&$selected i': {
          color: '#2AA1F7',
        },
      },
    },
    MuiButton: {
      root: {
        color: '#B4B4B4',
        height: '44px',
        letterSpacing: 'normal',
      },
      containedPrimary: {
        backgroundColor: '#2AA1F7',
        '&:hover': {
          backgroundColor: '#2AA1F7',
        },
      },
      outlinedSecondary: {
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.8)',
        color: '#000000',
        '&:hover': {
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.8)',
          color: '#000000',
        },
      },
      outlined: {
        padding: '13px 16px',
      },
      label: {
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 1.1875,
      },
    },
    MuiInputBase: {
      root: {
        height: '48px',
        padding: 0,
        fontSize: '16px',
        lineHeight: '24px',
      },
      input: {
        padding: '12px 32px 12px 16px',
        height: '48px',
        boxSizing: 'border-box',
        color: 'rgba(255, 255, 255, 1)',
      },
    },
    MuiInputLabel: {
      root: {
        color: 'rgba(255, 255, 255, 0.4)',
      },
      shrink: {
        display: 'none',
      },
      outlined: {
        '&$marginDense': {
          transform: 'translate(14px, 16px) scale(1)',
        },
      },
    },
    MuiSelect: {
      root: {
        color: '#FFFFFF',
        padding: '12px 32px 12px 16px',
      },
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: '16px',
      },
    },
    MuiMenu: {
      paper: {
        background: '#323232',
        color: '#FFFFFF',
      },
    },
    MuiFormHelperText: {
      root: {
        '&$error': {
          color: '#FF0000',
        },
      },
      contained: {
        marginLeft: '8px',
      },
    },
    MuiFormLabel: {
      root: {
        '&$error': {
          color: 'rgba(255, 255, 255, 0.4)',
        },
      },
    },
    MuiTableCell: {
      sizeSmall: {
        padding: '6px 16px',
        fontSize: '0.75rem',
        lineHeight: 1.5,
      },
    },
  },
});
