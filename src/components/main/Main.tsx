import * as React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Header } from 'components/header';
// import { getLocale as getLocaleAsyncAction } from 'models/locale';
// import { useAppDispatch } from 'store/configureStore';
// import { useIsAuthenticatedSelector } from 'models/auth';
// import { useOptionsDataSelector } from 'models/options/selectors';
// import { getLanguage, getOptions } from 'models/options';
// import { getCashOut } from 'models/cashOut';
// import { getTickets } from 'models/tickets';
// import i18next from 'i18next';

const useStyles = makeStyles({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    minHeight: '100vh',
    background:
      'radial-gradient(100% 100% at 50.13% 0%, white 0%, #f1c79a8a 100%)',
  },
  content: {
    flexGrow: 1,
  },
});

interface IMain {
  children: React.ReactNode;
}

declare global {
  interface Window {
    SIR: (
      action: string,
      target?: string,
      typeWidget?: string,
      options?: object,
    ) => void;
  }
}

export const Main: React.FunctionComponent<IMain> = ({ children }: IMain) => {
  const classes = useStyles();

  return (
    <div className={`${classes.main} ${classes.flexColumn}`}>
      <Header />
      <div className={`${classes.content} ${classes.flexColumn}`}>
        {children}
      </div>
    </div>
  );
};
