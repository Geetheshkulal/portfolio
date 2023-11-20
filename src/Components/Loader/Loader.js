import React from 'react'
import loader from './icons/loading.png'
function Loader() {
  return (
    <div>
      <div className='loader'>
        <img src={loader} alt='loading'></img>
      </div>
    </div>
  )
}

export default Loader;
