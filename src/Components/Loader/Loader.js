import React from 'react'
import './Loader.css';
import loader from '../icons/loading.gif'
function Loader() {
  return (
    <div>
      <div className='loader'>
        <img  className='loading' src={loader} alt='loading'></img>
      </div>
    </div>
  )
}

export default Loader;
