import React, { useState } from 'react';
import axios from 'axios';

function ChantierComponent() {
    const [chantiers, setChantiers] = useState([]);
    const [datedebut, setDatedebut] = useState('');
    const [duree, setDuree] = useState('');
    const [datefin, setDatefin] = useState('');
    const [editId, setEditId] = useState(null);
    const [error, setError] = useState('');

    const addChantier = () => {
        if (!datedebut || !duree || !datefin) {
            setError('Please fill in all fields');
            return;
        }

        axios.post('http://localhost:7000/chantier/add', { datedebut, duree, datefin })
            .then(response => {
                setChantiers([...chantiers, response.data]);
                clearInputFields();
            })
            .catch(error => {
                console.error('Error adding chantier:', error);
            });
    };

    const deleteChantier = (id) => {
        axios.delete(`http://localhost:7000/chantier/${id}`)
            .then(() => {
                setChantiers(chantiers.filter(chantier => chantier._id !== id));
            })
            .catch(error => {
                console.error('Error deleting chantier:', error);
            });
    };

    const updateChantier = (id) => {
        if (!datedebut || !duree || !datefin) {
            setError('Please fill in all fields');
            return;
        }

        axios.put(`http://localhost:7000/chantier/${id}`, { datedebut, duree, datefin })
            .then(response => {
                setChantiers(chantiers.map(chantier => {
                    if (chantier._id === id) {
                        return response.data;
                    }
                    return chantier;
                }));
                clearInputFields();
                setEditId(null);
            })
            .catch(error => {
                console.error('Error updating chantier:', error);
            });
    };

    const clearInputFields = () => {
        setDatedebut('');
        setDuree('');
        setDatefin('');
        setError('');
    };

    const editChantier = (chantier) => {
        setDatedebut(chantier.datedebut);
        setDuree(chantier.duree);
        setDatefin(chantier.datefin);
        setEditId(chantier._id);
        setError('');
    };

    return (
        <div>
            <h1>Chantier Component</h1>
            <div>
                <input type="date" value={datedebut} onChange={(e) => setDatedebut(e.target.value)} placeholder="Date Début" />
                <input type="text" value={duree} onChange={(e) => setDuree(e.target.value)} placeholder="Durée" />
                <input type="date" value={datefin} onChange={(e) => setDatefin(e.target.value)} placeholder="Date Fin" />
                <button onClick={editId ? () => updateChantier(editId) : addChantier}>{editId ? 'Update' : 'Add'}</button>
                {editId && <button onClick={() => { clearInputFields(); setEditId(null); }}>Cancel</button>}
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <ul>
                {chantiers.map(chantier => (
                    <li key={chantier._id}>
                        {chantier.datedebut} - {chantier.duree} - {chantier.datefin}
                        <button onClick={() => deleteChantier(chantier._id)}>Delete</button>
                        <button onClick={() => editChantier(chantier)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChantierComponent;







