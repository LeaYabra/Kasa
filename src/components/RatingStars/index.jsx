import React from 'react';
import starActive from '../../images/star-active.svg';
import starInactive from '../../images/star-inactive.svg';
import styles from './RatingStars.module.scss';


function RatingStars({ rating }) {
  const maxStars = 5; 
 

  const stars = [];

  // Générer des étoiles avec une clé unique
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(<img key={i} src={starActive} alt="active star"/>);
    } else {
      stars.push(<img key={i} src={starInactive} alt="inactive star"/>);
    }
  }

  return (<div className={styles.Rating}>{stars}</div>);
}

  export default RatingStars;