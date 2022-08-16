import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4db251",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffaf00",
      contrastText: "#fff",
    },
    // secondary: {},
    // error: {},
    // warning: {},
    // info: {},
    // success: {},
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white",
        },
      },
    },
  },
});

export default theme;
