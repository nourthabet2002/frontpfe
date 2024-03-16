import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({
    serviceName: '',
    subCategory: '',
    date: '',
    numberOfrooms: 0, // Corrected key name
    place: ''
  });

  const [avis, setAvis] = useState({
    commentaire: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReservation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddReservation = async () => {
    try {
      const response = await axios.post("http://localhost:7000/resclient/add", newReservation);
      setReservations(prevState => [...prevState, response.data]);
      setNewReservation({
        serviceName: '',
        subCategory: '',
        date: '',
        numberOfrooms: 0,
        place: ''
      });
      console.log("Reservation added successfully:", response.data);
    } catch (error) {
      console.error("Error adding reservation:", error);
    }
  };

  const handleAvisChange = (e) => {
    const { name, value } = e.target;
    setAvis(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddAvis = async () => {
    try {
      await axios.post("http://localhost:7000/avis/add", avis);
      setAvis({ commentaire: '' });
      console.log("Avis added successfully");
    } catch (error) {
      console.error("Error adding avis:", error);
    }
  };

  return (
    <div>
      <h2>Réservation de services en ligne</h2>
      <div>
        <label>Nom du service:</label>
        <input
          type="text"
          name="serviceName"
          value={newReservation.serviceName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Sous-catégorie:</label>
        <input
          type="text"
          name="subCategory"
          value={newReservation.subCategory}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={newReservation.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Nombre de pièces:</label>
        <input
          type="number"
          name="numberOfrooms" // Corrected name
          value={newReservation.numberOfrooms} // Corrected key name
          onChange={handleChange}
        />
      </div>
      <div> {/* Added input for place */}
        <label>Place:</label>
        <input
          type="text"
          name="place"
          value={newReservation.place}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddReservation}>Ajouter</button>

      <h3>Liste des réservations</h3>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            <strong>Service:</strong> {reservation.serviceName}, <strong>Sous-catégorie:</strong> {reservation.subCategory}, <strong>Date:</strong> {reservation.date}, <strong>Nombre de pièces:</strong> {reservation.numberOfrooms}
          </li>
        ))}
      </ul>

      <div>
        <h2>Ajouter un avis</h2>
        <div>
          <label>Commentaire:</label>
          <input
            type="text"
            name="commentaire"
            value={avis.commentaire}
            onChange={handleAvisChange}
          />
        </div>
        <button onClick={handleAddAvis}>Ajouter</button>
      </div>
    </div>
  );
};

export default ReservationForm;



