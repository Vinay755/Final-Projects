import React, { useState } from 'react';
import "./styles.css";

  const BookingSystem = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleDateTimeSelection = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  const handleBookingConfirmation = () => {
    if (selectedService && selectedDateTime) {
      alert(`Booking confirmed for ${selectedService} on ${selectedDateTime}`);
    } else {
      alert('Please select a service and date/time');
    }
  };

  return (
    <div className="booking-system">
      <div className="booking-header">
        <h1>Reservation/Booking System</h1>
      </div>
      {!loggedIn ? (
        <div className="login-form">
          <h2>Please log in to continue</h2>
          <button onClick={handleLogin}>Log In</button>
        </div>
      ) : (
        <div className="booking-form">
          <h2>Welcome! Select a service and date/time to book</h2>
          <div className="service-selection">
            <h3>Services:</h3>
            <button onClick={() => handleServiceSelection('Hotel')}>Hotel</button>
            <button onClick={() => handleServiceSelection('Flight')}>Flight</button>
            <button onClick={() => handleServiceSelection('Restaurant')}>Restaurant</button>
          </div>
          {selectedService && (
            <div className="date-time-selection">
              <h3>Select Date and Time:</h3>
              <input type="datetime-local" onChange={(e) => handleDateTimeSelection(e.target.value)} />
            </div>
          )}
          <button className="confirm-button" onClick={handleBookingConfirmation}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;

