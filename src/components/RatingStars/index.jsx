import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RatingStars.module.scss';
library.add(faStar);

function RatingStars({ rating }) {
  const maxStars = 5; 
  const pinkStar = <FontAwesomeIcon icon="star" style={{ color: '#FF6060 '}} />; // Utilisation de l'icône "star"
  const grayStar = <FontAwesomeIcon icon="star" style={{ color: '#E3E3E3' }} />; // Utilisation de l'icône "star" en gris

  const stars = [];

  // Générer des étoiles avec une clé unique
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>{pinkStar}</span>);
    } else {
      stars.push(<span key={i}>{grayStar}</span>);
    }
  }

  return <div className={styles.Rating}>{stars}</div>;
}

  export default RatingStars;