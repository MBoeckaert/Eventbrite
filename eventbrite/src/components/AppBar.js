import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

export default function BottomAppBar() {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            {/* <MenuIcon /> */} Menu
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">{/* <SearchIcon /> */} Search</IconButton>
          <IconButton color="inherit">{/* <MoreIcon /> */} More</IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
