// Button.js
import React from 'react';
import './Button.css';

function Button({ handleClick }) {
  return (
    <button className='btn' onClick={handleClick}>
      Vote
    </button>
  );
}

export default Button;
