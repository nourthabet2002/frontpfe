import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chef = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prénom: '',
    email: '',
    password: '',
    numtel: '',
    spécialité: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/employe/add', formData);
      console.log('Employee added:', response.data);
      // Optionally, reset the form after successful submission
      setFormData({
        nom: '',
        prénom: '',
        email: '',
        password: '',
        numtel: '',
        spécialité: ''
      });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
        </div>
        <div>
          <label>Prénom:</label>
          <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Num Tel:</label>
          <input type="text" name="numtel" value={formData.numtel} onChange={handleChange} />
        </div>
        <div>
          <label>Spécialité:</label>
          <input type="text" name="spécialité" value={formData.spécialité} onChange={handleChange} />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default Chef;














