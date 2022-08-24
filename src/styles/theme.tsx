import { indigo, yellow } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
});

const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
