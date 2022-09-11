import '../styles/fonts';

import CssBaseline from '@mui/material/CssBaseline';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';

import { store } from '../context/Store';
import MuiThemeProvider from '../styles/theme';

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <MuiThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
