import React from "react";

const BookingConfirmation = ({
  source,
  destination,
  selectedSeat,
  onConfirm,
  onCancel,
}) => {
  const handleConfirmClick = () => {
    onConfirm();
  };

  return (
    <div className="main-content booking-form">
      <h2>Confirm Booking</h2>
      <div>
        <p>Source: {source}</p>
        <p>Destination: {destination}</p>
        <p>Seat: {selectedSeat}</p>
      </div>
      <button onClick={handleConfirmClick}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default BookingConfirmation;
