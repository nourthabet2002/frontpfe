import React, { useState } from 'react';
import axios from 'axios';

function UpdateChef() {
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
      <h2>Update chef</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </div>
        {/* Other input fields for updating chef */}
        <button type="submit">Update chef</button>
      </form>
    </div>
  );
}

export default UpdateChef;
