import React, { useState } from 'react';

function StationPopup({ onAddStation, onClose }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [capacity, setCapacity] = useState('');
  const [operator, setOperator] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleXChange = (event) => {
    setX(event.target.value);
  };

  const handleYChange = (event) => {
    setY(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newStation = {
      name: name,
      address: address,
      city: city,
      capacity: capacity,
      operator: operator,
      x: x,
      y: y,
    };

    // Make an HTTP POST request to the server endpoint
    try {
      const response = await fetch('http://localhost:3001/api/stations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStation),
      });

      if (response.ok) {
        // Station created successfully
        onAddStation(newStation);
        setName('name');
        setAddress('');
        setCity('');
        setCapacity('');
        setOperator('');
        setX('');
        setY('');
        onClose();
      } else {
        console.error('Failed to create station:', response.status);
        // Handle error condition
      }
    } catch (error) {
      console.error('Error creating station:', error);
      // Handle error condition
    }
  };

  return (
    <div>
      <h2>Add Station</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={handleAddressChange} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" value={city} onChange={handleCityChange} />
        </div>
        <div>
          <label htmlFor="capacity">Capacity:</label>
          <input type="text" id="capacity" value={capacity} onChange={handleCapacityChange} />
        </div>
        <div>
          <label htmlFor="operator">Operator:</label>
          <input type="text" id="operator" value={operator} onChange={handleOperatorChange} />
        </div>
        <div>
          <label htmlFor="x">Latitude:</label>
          <input type="text" id="x" value={x} onChange={handleXChange} />
        </div>
        <div>
          <label htmlFor="y">Longitude:</label>
          <input type="text" id="y" value={y} onChange={handleYChange} />
        </div>
        <button type="submit">Add</button>
        <button onClick={onClose}>Close</button>
      </form>
    </div>
  );
}

export default StationPopup;
