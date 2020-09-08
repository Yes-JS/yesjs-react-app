import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store, { persistor } from './store/configureStore';
import { AppRoutes } from './AppRouter';
import betonTheme from './utils/beton-theme';
import { FullscreenLoader } from './components/loader';
// import './i18n';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={betonTheme}>
          <React.Suspense fallback={<FullscreenLoader />}>
            <AppRoutes />
          </React.Suspense>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;