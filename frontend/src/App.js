import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Ajouterchef from './Ajouterchef';
import Modifierchef from './Modifierchef';
import Surrprimerchef from './Surrprimerchef';
import Addservice from './Addservice';
import Reservation from './Reservation';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navbar />} />
        <Route path="/Ajouterchef" element={<Ajouterchef />} />
        <Route path="/Modifierchef" element={<Modifierchef />} />
        <Route path="/Surrprimerchef" element={<Surrprimerchef />} />
        <Route path="/Addservice" element={<Addservice />} />
        <Route path="/Reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
