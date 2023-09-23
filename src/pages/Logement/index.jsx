import React, { useEffect, useState } from 'react';
import Slideshow from '../../components/Slideshow';
import { useParams } from 'react-router-dom'; 
import styles from './Logement.module.scss';
import Collapse from '../../components/Collapse'; 

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
    {accommodation && (
      <>
        <Slideshow pictures={pictures} />
        <div className={styles.Accommodation}>
          <h1 className={styles.AccommodationTitle}>{accommodation.title}</h1>
          <p className={styles.AccommodationText}>{accommodation.location}</p>
          <p>
            {accommodation.tags.map((tag, index) => (
              <span key={index} className={styles.AccommodationTags}>
                {tag}
                {index < accommodation.tags.length - 1 && ' '}
              </span>
            ))}
          </p>
        </div>
          <div className={styles.AccommodationCollapse}>
            <div className={styles.Collapse}> 
              <Collapse title= 'Description' text={accommodation.description}/>
              <Collapse title='Equipements' text={
                <ul>
                  {accommodation.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                  ))}
                 </ul>
              }/>
            </div>
          </div>
      </>
    )}
  </div>
  );
}

export default Logement;
