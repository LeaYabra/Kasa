import React, { useState } from 'react';
import styles from  './Collapse.module.scss';
import PropTypes from 'prop-types';
import fleche from '../../images/fleche.png';

function Collapse({ title ,text}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div  className={styles.Collapse} >
      <button  onClick={toggleCollapse} >
      {isOpen ? (
          <>
            {title} 
          <img src={fleche} alt='fleche' className={isOpen ? styles.Rotate: ''} />
          </>
        ) : (
          <>
            {title} 
         <img src={fleche} alt='fleche'/>
          </>
        )}
        
      </button>
      {isOpen && (
        <div className={styles.CollapseText}>
        <p>{text}</p>
      </div>
      )}
    </div>
  );
}
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
}

export default Collapse;
