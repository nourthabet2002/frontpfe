import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    id: '',
    nom: '',
    prénom: '',
    email: '',
    password: '',
    numtel: ''
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/add', formData);
      console.log('chef added:', response.data);
      setFormData({
        id: '',
        nom: '',
        prénom: '',
        email: '',
        password: '',
        numtel: ''
        
      });
    } catch (error) {
      console.error('Error adding chef:', error);
    }
  };

  const handleDelete = async () => {
    const id = formData.id;
    if (!id) {
      console.error('ID is not provided');
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:7000/chef/${id}`);
      console.log('chef deleted:', response.data);
    } catch (error) {
      console.error('Error deleting chef:', error);
    }
  };

  const handleUpdate = async () => {
    const id = formData.id;
    if (!id) {
      console.error('ID is not provided');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:7000/chef/${id}`, formData);
      console.log('chef updated:', response.data);
    } catch (error) {
      console.error('Error updating chef:', error);
    }
  };

  return (
    <div>
      <h2>Add chef</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </div>
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
        
        <button type="submit">Add chef</button>
      </form>

      <div>
        <h2>chef Details</h2>
        <p>Nom: {formData.nom}</p>
        <p>Prénom: {formData.prénom}</p>
        <button onClick={handleUpdate}>Update chef</button>
        <button onClick={handleDelete}>Delete chef</button>
      </div>
    </div>
  );
};


export default FormComponent;
