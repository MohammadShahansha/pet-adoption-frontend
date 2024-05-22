import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: "#00abf0",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  //   typography: {
  //     body1: {
  //       color: "#0B1134CC",
  //     },
  //   },
});
// theme.shadows[1] = "0px 5px 22px lightgray";

// --bg-color: #081b29;
// --second-bg-color: #111e42;
// --text-color:#ededed;
// --main-color: #00abf0;
