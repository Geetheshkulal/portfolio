

import React from 'react';
import './Card1.css';

function Card1({educationData}) {
  return (
    <div className='box'>
      <h4>{educationData.year}</h4>
      <h3>{educationData.title}</h3>
      <p>{educationData.institution}</p>
      <p>{educationData.score}</p>
    </div>
  );
}

export default Card1;
