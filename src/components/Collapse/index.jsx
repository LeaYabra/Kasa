import React, { useState } from 'react';
import styles from  './Collapse.module.scss';
import PropTypes from 'prop-types';
import arrowTop from '../../images/arrow-top.svg'

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
          <img src={arrowTop} alt='fleche' className={isOpen ? styles.Rotate: ''} />
          </>
        ) : (
          <>
            {title} 
         <img src={arrowTop} alt='fleche'/>
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