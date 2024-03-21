import React, { useState } from 'react';
import axios from 'axios';

function ReservationForm() {
  const [reservationData, setReservationData] = useState({
    etatres: '',
    dateres: '',
    service: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/reservation/add', reservationData);
      console.log(response.data); // Log the response from the backend
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error('Error adding reservation:', error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div>
      <h2>Add Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="etatres">Etatres:</label>
          <input type="text" id="etatres" name="etatres" value={reservationData.etatres} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="dateres">Dateres:</label>
          <input type="text" id="dateres" name="dateres" value={reservationData.dateres} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="service">Service:</label>
          <input type="text" id="service" name="service" value={reservationData.service} onChange={handleChange} />
        </div>
        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
}

export default ReservationForm;
