import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            fontFamily="Montserrat"
            component="div"
            sx={{ flexGrow: 1, fontSize: "1.4rem" }}
          >
            Appointment Booking Portal
          </Typography>
          <Button color="inherit" onClick={handlelogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LandingPage;
