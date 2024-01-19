import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

const Link = () => {
  return (
    <div>
      <div className='navigation d-flex justify-content-center flex-wrap'>
        <RouterLink to="/" className='nav-link'>Home<span></span></RouterLink>
        <RouterLink to="/photos" className='nav-link'>Photos<span></span></RouterLink>
        <RouterLink to="/quotes" className='nav-link'>Quotes<span></span></RouterLink>
        <RouterLink to="/wallpaper" className='nav-link'>Wallpaper<span></span></RouterLink>
      </div>
    </div>
  )
}

export default Link