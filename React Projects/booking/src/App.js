import React, { useState } from "react";
import "./App.css";
// import SourceDestinationSelection from "./components/SourceDestinationSelection";
// import SeatSelection from "./components/SeatSelection";
// import BookingConfirmation from "./components/BookingConfirmation";

import SourceDestinationSelection from "./Components/SourceDestinationSelection";
import SeatSelection from "./Components/SeatSelection";
import BookingConfirmation from "./Components/BookingConfirmation";

function App() {
  const [step, setStep] = useState(1);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");

  const handleSourceDestinationSelection = (source, destination) => {
    setSource(source);
    setDestination(destination);
    setStep(2);
  };

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
    setStep(3);
  };

  const handleBookingConfirmation = () => {
    setStep(4);
  };

  const handleBookingCancel = () => {
    setSource("");
    setDestination("");
    setSelectedSeat("");
    setStep(1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Reservation</h1>
      </header>
      <main>
        {step === 1 && (
          <SourceDestinationSelection
            onSelection={handleSourceDestinationSelection}
          />
        )}
        {step === 2 && (
          <SeatSelection
            source={source}
            destination={destination}
            onSeatSelection={handleSeatSelection}
            onCancel={handleBookingCancel}
          />
        )}
        {step === 3 && (
          <BookingConfirmation
            source={source}
            destination={destination}
            selectedSeat={selectedSeat}
            onConfirm={handleBookingConfirmation}
            onCancel={handleBookingCancel}
          />
        )}
        {step === 4 && <h2>Booking Confirmed!</h2>}
      </main>
    </div>
  );
}

export default App;
