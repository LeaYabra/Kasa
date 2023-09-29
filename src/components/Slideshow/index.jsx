import React, { useState } from 'react';
import styles from './Slideshow.module.scss';
import rightArrow from '../../images/arrow-right.svg'
import leftArrow from '../../images/arrow-left.svg'

function Slideshow({ pictures}) {
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
          src={leftArrow}
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
        <p className={styles.CurrentImage}>{currentImageIndex + 1} / {pictures.length}</p>
      )}

      {!hideArrows && (
        <img
          src={rightArrow}
          alt="Next"
          className={styles.IconRight}
          onClick={nextImage}
        />
      )}
      </div>
  );
}

export default Slideshow;