import React from 'react';
import styles from './Error.module.scss';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className={styles.Error}>
            <h1 className={styles.Error404}>404</h1>
            <p className={styles.ErrorText}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/Home" className={styles.ErrorLink}> Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error