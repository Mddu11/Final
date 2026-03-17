import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: "white" }}>
            Recipe Finder
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}