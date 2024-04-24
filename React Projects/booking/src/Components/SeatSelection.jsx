import React, { useState } from "react";

const SeatSelection = ({ source, destination, onSeatSelection, onCancel }) => {
  const [selectedSeat, setSelectedSeat] = useState("");

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
  };

  const handleSeatSubmit = () => {
    onSeatSelection(selectedSeat);
  };

  return (
    <div className="main-content booking-form">
      <h2>Book a Flight</h2>
      <div>
        <p>Source: {source}</p>
        <p>Destination: {destination}</p>
        <h3>Select a Seat</h3>
        <div className="seat-selector">
          <div
            className={`seat ${selectedSeat === "A1" ? "selected" : ""}`}
            onClick={() => handleSeatSelect("A1")}
          >
            A1
          </div>
          <div
            className={`seat ${selectedSeat === "A2" ? "selected" : ""}`}
            onClick={() => handleSeatSelect("A2")}
          >
            A2
          </div>
          <div
            className={`seat ${selectedSeat === "B1" ? "selected" : ""}`}
            onClick={() => handleSeatSelect("B1")}
          >
            B1
          </div>
          <div
            className={`seat ${selectedSeat === "B2" ? "selected" : ""}`}
            onClick={() => handleSeatSelect("B2")}
          >
            B2
          </div>
        </div>
      </div>
      <button onClick={handleSeatSubmit}>Next</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default SeatSelection;
