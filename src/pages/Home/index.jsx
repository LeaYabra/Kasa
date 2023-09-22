import React, { useEffect, useState } from 'react'; 
import styles from './Home.module.scss';
import Card from '../../components/Card';

function Home() {
  
  const [card, setCard] = useState([]); 

  useEffect(() => {
    // Fonction pour charger les données JSON depuis le fichier
    async function fetchData() {
      try {
        const response = await fetch('/data/logements.json'); 
        const data = await response.json();
        setCard(data); // Mettre à jour l'état avec les données JSON
      } catch (error) {
        console.error('Erreur lors du chargement des données JSON :', error);
      }
    }

    fetchData(); 
  }, []);

  return (
  <div>
    <header className={styles.Banner}>
    <p>Chez vous, partout et ailleurs</p>
    </header>
      <div className={styles.Contain}>
        <div className={styles.CardList}>
          {card.map((card) => (
            <Card
            key={card.id} 
            title={card.title}
            cover={card.cover}
            id={card.id} 
            />
          ))}
        </div>
      </div>
  </div>
);
}
export default Home;