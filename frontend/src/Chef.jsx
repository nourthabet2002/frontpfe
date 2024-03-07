import React, { useState } from 'react';
import axios from 'axios';

const Chef = () => {
  const [formData, setFormData] = useState({
    id: '',
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
      const response = await axios.post('http://localhost:7000/employe/add', formData);
      console.log('Employee added:', response.data);
      setFormData({
        id: '',
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

  const handleDelete = async () => {
    const id = formData.id;
    if (!id) {
      console.error('ID is not provided');
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:7000/employe/${id}`);
      console.log('Employee deleted:', response.data);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleUpdate = async () => {
    const id = formData.id;
    if (!id) {
      console.error('ID is not provided');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:7000/employe/${id}`, formData);
      console.log('Employee updated:', response.data);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
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
        <div>
          <label>Spécialité:</label>
          <input type="text" name="spécialité" value={formData.spécialité} onChange={handleChange} />
        </div>
        <button type="submit">Add Employee</button>
      </form>

      <div>
        <h2>Employee Details</h2>
        <p>Nom: {formData.nom}</p>
        <p>Prénom: {formData.prénom}</p>
        <button onClick={handleUpdate}>Update Employee</button>
        <button onClick={handleDelete}>Delete Employee</button>
      </div>
    </div>
  );
};

export default Chef;

















