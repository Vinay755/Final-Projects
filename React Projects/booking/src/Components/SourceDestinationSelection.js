import React, { useState } from "react";

const SourceDestinationSelection = ({ onSelection }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  const handleSelection = () => {
    if (source && destination) {
      onSelection(source, destination);
    }
  };

  return (
    <div className="main-content booking-form">
      <h2>Select Source and Destination</h2>
      <form>
        <label htmlFor="source">Source:</label>
        <select
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        >
          <option value="">Select Source</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <label htmlFor="destination">Destination:</label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        >
          <option value="">Select Destination</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleSelection}>
          Next
        </button>
      </form>
    </div>
  );
};

export default SourceDestinationSelection;
