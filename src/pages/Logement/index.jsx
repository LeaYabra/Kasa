import React, { useEffect, useState} from 'react';
import Slideshow from '../../components/Slideshow';
import { useParams, useNavigate } from 'react-router-dom'; // Importez useNavigate
import styles from './Logement.module.scss';
import Collapse from '../../components/Collapse'; 
import Rating from '../../components/RatingStars'; 

function Logement() {
  const { id } = useParams(); 
  const [accommodation, setAccommodation] = useState(null);
  const [pictures, setPictures] = useState([]);
  const navigate = useNavigate(); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/logements.json'); 
        if (!response.ok) {
          throw new Error('Erreur de chargement du fichier JSON');
        }
        const data = await response.json();
        const foundAccommodation = data.find(item => item.id === id);
        
     // Redirigez vers la page d'erreur 404
      if (!foundAccommodation) {
        navigate('/error/index.jsx'); 
        return;
      }
        setAccommodation(foundAccommodation);
        setPictures(foundAccommodation ? foundAccommodation.pictures : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id,navigate]);

  return (
    <div>
    {accommodation && (
      <>
        <Slideshow pictures={pictures} />
        <div className={styles.Accommodation}>
           <div>
            <h1 className={styles.AccommodationTitle}>{accommodation.title}</h1>
            <p className={styles.AccommodationText}>{accommodation.location}</p>
            </div>
              <div className={styles.AccommodationProfile}>
              <p className={styles.AccommodationName}>{accommodation.host.name}</p>
              <img className={styles.AccommodationPicture} src={accommodation.host.picture} alt="Profile" />
            </div>
                <p>
                  {accommodation.tags.map((tag, index) => (
                  <span key={index} className={styles.AccommodationTags}>
                  {tag}
                  {index < accommodation.tags.length - 1 && ' '}
                  </span>
                  ))}
                </p>
                <Rating className={styles.AccommodationRating} rating={parseInt(accommodation.rating, 10)} />
          
              
        </div>
          <div className={styles.AccommodationCollapse}>
           
              <Collapse className={styles.Collapse} title= 'Description' text={accommodation.description}/>
              <Collapse title='Equipements' text={
                <ul>
                  {accommodation.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                  ))}
                 </ul>
              }/>
          </div>
      </>
    )}
  </div>
  );
}

export default Logement;
