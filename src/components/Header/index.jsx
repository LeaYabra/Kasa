import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './Header.module.scss';


function Header() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
      <Link to="/Home"> 
        <img src={logo} className={styles.AppLogo} alt="logo" />
      </Link>
      <nav>
        <Link to="/Home" className={styles.AppMenu}> Accueil</Link>
        <Link to="/About" className={styles.AppMenu}> A propos</Link>
      </nav>
      </header>
    </div>
  );
}

export default Header;