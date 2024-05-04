import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulating authentication
    if (username === "user" && password === "password") {
      // Save login status in local storage
      localStorage.setItem("loggedIn", true);
      navigate("/appointment");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              fontFamily="Montserrat"
              component="div"
              sx={{ flexGrow: 1, fontSize: "1.4rem" }}
            >
              Appointment Booking Portal
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" fontFamily="Montserrat" fontSize="1.8rem">
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
        <Button color="inherit" component={Link} to="/register">
          Don't have an account? Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default Login;
