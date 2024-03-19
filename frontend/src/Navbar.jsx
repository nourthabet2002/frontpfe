// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Ajouterchef">Ajouter Chef</Link></li>
        <li><Link to="/Modifierchef">Modifier</Link></li>
        <li><Link to="/Surrprimerchef">Surpprimer</Link></li>
        <li><Link to="/Addservice">Ajout Service</Link></li>
        <li><Link to="/ajout-sous-categorie">Ajout Sous Categorie</Link></li>
        <li><Link to="/Reservation">Consulter Etat Avancement</Link></li>
        <li><Link to="/affecter-chef">Affecter Chef</Link></li>
        <li><Link to="/gerer-reservation">Gérer Reservation</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
