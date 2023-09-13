import React from 'react';
import styles from './Home.module.scss';
import card from '../../images/banner.png';
function Home() {
  return (
  <div>
  <header className={styles.Banner}>
      <p>Chez vous, partout et ailleurs</p>
  </header>
  <div className={styles.Contain}>
    <div className={styles.Card}>
    <p className={styles.CardTitle}>Titre</p>
      <img src={card} className={styles.CardImage} alt="card" />
     
    </div>
  
  </div>
  </div>

  
 
  );
}

export default Home;