import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";

import LandingPage from "./components/LandingPage";
import AppointmentScheduler from "./components/AppointmentScheduler";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<AppointmentScheduler />} />
      </Routes>
    </Router>
  );
};

export default App;
