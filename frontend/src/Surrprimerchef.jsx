// DeleteChef.js
import React, { useState } from 'react';
import axios from 'axios';

function DeleteChef() {
  const [id, setId] = useState('');

  const handleDelete = async () => {
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

  return (
    <div>
      <h2>Delete chef</h2>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Delete chef</button>
    </div>
  );
}

export default DeleteChef;
