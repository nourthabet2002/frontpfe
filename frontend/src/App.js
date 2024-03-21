// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template from './Template';
import Ajouterchef from './Ajouterchef';
import Modifierchef from './Modifierchef';
import Surrprimerchef from'./Surrprimerchef'
import Addservice from'./Addservice'
import Reservation from'./Reservation'
import Ajoutres from'./Ajoutres'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/Ajouter" element={<Ajouterchef />} />
        <Route path="/Modifier" element={<Modifierchef />} />
        <Route path="/Surrprimer" element={<Surrprimerchef />} />
        <Route path="/ajouterse" element={<Addservice />} />
        <Route path="/consulter" element={<Reservation />} />
        <Route path="/accepter" element={<Ajoutres />} />
      </Routes>
    </Router>
  );
}

export default App;




