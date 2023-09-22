import React, { useEffect, useState } from 'react';
import Slideshow from '../../components/Slideshow';
import { useParams } from 'react-router-dom'; 

function Logement() {
  const { id } = useParams(); 
  const [accommodation, setAccommodation] = useState(null);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/logements.json'); // Le chemin est relatif à la racine du site
        if (!response.ok) {
          throw new Error('Erreur de chargement du fichier JSON');
        }
        const data = await response.json();
        const foundAccommodation = data.find(item => item.id === id);
        setAccommodation(foundAccommodation);
        setPictures(foundAccommodation ? foundAccommodation.pictures : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Slideshow pictures={pictures} />
       {accommodation ? (
        <div>
          <h2>{accommodation.title}</h2>
          <p>{accommodation.location}</p>
        </div>
      ) : (
        <p>Hébergement non trouvé</p>
      )}
    </div>
  );
}

export default Logement;
