import React, { useState } from 'react';
import axios from 'axios';

function AddService() {
  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    subCategory: ''
  });

  const handleServiceChange = (e) => {
    setServiceFormData({ ...serviceFormData, [e.target.name]: e.target.value });
  };

  const handleSubmitService = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/service/add', serviceFormData);
      console.log('Service added:', response.data);
      setServiceFormData({
        name: ''
      });
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <div>
      <h2>Add Service</h2>
      <form onSubmit={handleSubmitService}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={serviceFormData.name} onChange={handleServiceChange} />
        </div>
        {/* Other input fields for adding service */}
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default AddService;
