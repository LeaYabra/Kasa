import React from 'react';
import PropTypes from 'prop-types';
// import './Emoji.css';
import styleComponent from './Emoji.module.scss';


function Emoji({emoji, description}) {
  console.log('styles', styleComponent)
  const style = {
    border: description === '' ? '1px solid green' : '1px solid fuchsia'
  }
  return (
    <span role="img" aria-label={description} className={styleComponent.test} style={style}>{emoji}</span>
  );
}

Emoji.propTypes = {
    emoji: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
export default Emoji;
