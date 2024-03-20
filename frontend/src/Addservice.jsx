import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddSubcategory() {
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedServiceName, setSelectedServiceName] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:7000/service');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleAddSubcategory = async () => {
    try {
      // Assuming you have an endpoint to add subcategories
      const response = await axios.post(`http://localhost:7000/${selectedServiceId}/categorie/add`, {
        category: category
      });
      console.log('Subcategory added:', response.data);
      // Reset form or update UI as needed
    } catch (error) {
      console.error('Error adding subcategory:', error);
    }
  };

  const handleServiceChange = (e) => {
    const selectedService = services.find(service => service._id === e.target.value);
    setSelectedServiceId(e.target.value);
    setSelectedServiceName(selectedService ? selectedService.name : '');
  };

  return (
    <div>
      <h2>Add Subcategory</h2>
      <label>Select Service:</label>
      <select value={selectedServiceId} onChange={handleServiceChange}>
        <option value="">Select service</option>
        {services.map((service) => (
          <option key={service._id} value={service._id}>
            {service.name}
          </option>
        ))}
      </select>
      <br />
      <p>Selected Service: {selectedServiceName}</p>
      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      <br />
      <button onClick={handleAddSubcategory}>Add Subcategory</button>
    </div>
  );
}

export default AddSubcategory;












