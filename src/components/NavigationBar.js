import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export const NavigationBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#f8f9fa", color: "#333", zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={6}>
      <Toolbar>
        {/* Links Section */}
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Button
            color="inherit"
            component={Link}
            to="/planner"
            sx={{ textTransform: "none", margin: "0 10px" }}
          >
            Planner
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/resources"
            sx={{ textTransform: "none", margin: "0 10px" }}
          >
            Resources
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ textTransform: "none", margin: "0 10px" }}
          >
            About
          </Button>
        </Box>

        {/* Title Section */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          MONEY MAP
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
