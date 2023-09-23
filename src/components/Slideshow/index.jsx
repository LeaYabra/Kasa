import React, { useState } from 'react';
import styles from './Slideshow.module.scss';
import fleche from '../../images/fleche.png';

function Slideshow({ pictures, title, location, tags }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Condition pour cacher les flèches s'il n'y a qu'une seule image
  const hideArrows = pictures.length === 1;

  return (
    <div className={styles.Slideshow}>
      {!hideArrows && (
        <img
          src={fleche}
          alt="Previous"
          className={styles.IconLeft}
          onClick={prevImage}
        />
      )}

      <img
        src={pictures[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className={styles.SlideshowImage}
      />

      {!hideArrows && (
        <img
          src={fleche}
          alt="Next"
          className={styles.IconRight}
          onClick={nextImage}
        />
      )}

      <h2>{title}</h2>
      <p>{location}</p>
      <p>{tags}</p>

    </div>
  );
}

export default Slideshow;
