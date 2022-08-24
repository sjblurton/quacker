import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../context/Store";
import "../styles/fonts";
import MuiThemeProvider from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </Provider>
  );
}

export default MyApp;
