import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../images/logoFooter.png';

function Footer() {
  return (
    <div className={styles.Footer}>
     <img src={logo} className={styles.FooterLogo} alt="logo" />
     <p className={styles.FooterText} >© 2023 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;