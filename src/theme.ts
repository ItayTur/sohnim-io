"use client";

import createTheme from "@mui/material/styles/createTheme";

const primaryMain = "#cc66ff";
const secondaryMain = "#8a2be2";
const foregroundPrimary = "#fff";

export const theme = createTheme({
  palette: {
    background: {
      default: "#2e026d",
      paper: "#15162c",
    },
    primary: {
      main: primaryMain, // Custom primary color
    },
    secondary: {
      main: secondaryMain, // Custom secondary color
    },
    text: {
      primary: foregroundPrimary,
      secondary: "#cccccc",
    },
  },
  typography: {
    allVariants: {
      color: foregroundPrimary,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryMain,
          color: foregroundPrimary,
        },
      },
    },
  },
});
