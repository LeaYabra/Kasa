import React, { useState } from 'react';
import styles from './Collapse.module.scss';
import PropTypes from 'prop-types';
import arrowTop from '../../images/arrow-top.svg';

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.Collapse}>
      <button onClick={toggleCollapse}>
        {title}
        <img
          src={arrowTop}
          alt="fleche"
          className={isOpen ? styles.Rotate : ''}
        />
      </button>
      <div
        className={`${styles.CollapseText} ${isOpen ? styles.CollapseOpen : ''} : `}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};

export default Collapse;
