import React, { useEffect, useState} from 'react';
import Slideshow from '../../components/Slideshow';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Logement.module.scss';
import Collapse from '../../components/Collapse'; 
import Rating from '../../components/RatingStars'; 
import PropTypes from 'prop-types';

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
            <div className={styles.AccommodationTags}>
              {accommodation.tags.map((tag, index) => (
              <span key={index} className={styles.AccommodationTag}>
                {tag}
                {index < accommodation.tags.length - 1 && ' '}
              </span>
              ))}
            </div>
          </div>
          <div className={styles.AccommodationProfileRating}>
            <div className={styles.AccommodationProfile}>
              <p className={styles.AccommodationName}>{accommodation.host.name}</p>
              <img className={styles.AccommodationPicture} src={accommodation.host.picture} alt="Profile" /> 
            </div> 
            <Rating className={styles.AccommodationRating} rating={parseInt(accommodation.rating, 10)} />       
          </div>    
        </div>
        <div className={styles.AccommodationCollapse}>
          <div className={styles.Collapse}>
            <Collapse title= 'Description' text={accommodation.description}/>
          </div>
          <div className={styles.Collapse}>
            <Collapse title='Equipements' text={ 
              accommodation.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
              ))}
            />
          </div>
        </div>
      </>
    )}
  </div>
  );
}

Logement.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  host: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
  }),
  tag: PropTypes.arrayOf(PropTypes.string),
};

export default Logement;
