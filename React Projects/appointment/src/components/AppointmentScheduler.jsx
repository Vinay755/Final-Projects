import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  CircularProgress,
  Paper,
  IconButton,
} from "@mui/material";
import { format } from "date-fns";
import {} from "@mui/lab";
import TimePicker from "@mui/lab/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const AppointmentScheduler = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [value, setValue] = useState([null, null]);
  const navigate = useNavigate();

  const handleSchedule = () => {
    setLoading(true);
    // Simulate API call to check availability
    setTimeout(() => {
      setLoading(false);
      // Simulate available time
      const newAppointment = {
        id: Math.floor(Math.random() * 1000),
        date: date,
        time: time,
        location: location,
        purpose: purpose,
      };
      setAppointments([...appointments, newAppointment]);
      setOpen(true);
    }, 1500);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleViewCalendar = () => {
    navigate("/calendar");
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
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
              Appointment Booking System
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
        <Typography
          component="h1"
          variant="h5"
          fontFamily="Montserrat"
          fontSize="1.8rem"
        >
          Schedule an Appointment
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MobileDatePicker
              label="Select Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TimePicker
              label="Select Time"
              value={time}
              onChange={(newValue) => setTime(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="location"
              label="Location"
              name="location"
              autoComplete="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="purpose"
              label="Purpose"
              name="purpose"
              autoComplete="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          onClick={handleSchedule}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            "Schedule"
          )}
        </Button>
        <Button onClick={handleViewCalendar}>View Calendar</Button>
        <Dialog
          open={open}
          onClose={handleCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Success!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your appointment on {format(date, "dd/MM/yyyy")} at{" "}
              {format(time, "HH:mm")} has been scheduled.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          fontFamily="Montserrat"
          fontSize="1.8rem"
          sx={{ mt: 5 }}
        >
          View Appointments
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            startText="Start" endText="End" value={value}
            onChange={handleDateChange}
            renderInput=
            {(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} variant="standard" />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} variant="standard" />
              </React.Fragment>
            )}
            calendars={1}
          </DemoContainer>
          <Paper sx={{ mt: 2 }}
              value={value}
              onChange={handleDateChange}
              renderHeader={(props) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={props.decrement}
                    aria-label="Previous month"
                  ></IconButton>
                  <Typography variant="h6" component="span">
                    {props.label}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={props.increment}
                    aria-label="Next month"
                  ></IconButton>
                </Box>
              )}
            />
          </Paper>
        </LocalizationProvider>
      </Box>
    </div>
  );
};

export default AppointmentScheduler;
