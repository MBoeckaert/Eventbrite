import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      // This is green.A700 as hex.
      main: "#63666A.",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#FFA500",
    },
  },
});

export default function BottomAppBar() {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <ThemeProvider theme={theme}>
            <IconButton color="secondary" aria-label="open drawer">
              Home
            </IconButton>
            <IconButton color="primary"> Search</IconButton>
            <IconButton color="primary"> Like</IconButton>
            <IconButton color="primary"> Tickets</IconButton>
            <IconButton color="primary"> Profile</IconButton>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </>
  );
}
