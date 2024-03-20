import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteChef() {
  const [chefs, setChefs] = useState([]);
  const [nom, setNom] = useState(''); // Define nom and setNom

  useEffect(() => {
    fetchChefs();
  }, []);

  const fetchChefs = async () => {
    try {
      const response = await axios.get('http://localhost:7000/chef');
      setChefs(response.data);
    } catch (error) {
      console.error('Error fetching chefs:', error);
    }
  };

  const handleDelete = async () => {
    if (!nom) {
      console.error('No chef selected');
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:7000/chef/${nom}`);
      console.log('Chef deleted:', response.data);
      fetchChefs();
      setNom(''); // Reset selected chef
    } catch (error) {
      console.error('Error deleting chef:', error);
    }
  };

  return (
    <div>
      <h2>Delete chef</h2>
      <select value={nom} onChange={(e) => setNom(e.target.value)}>
        <option value="">Select chef to delete</option>
        {chefs.map((chef) => (
          <option key={chef.id} value={chef.nom}> {/* Assuming chef.nom is the name */}
            {chef.nom}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete chef</button>
    </div>
  );
}

export default DeleteChef;

