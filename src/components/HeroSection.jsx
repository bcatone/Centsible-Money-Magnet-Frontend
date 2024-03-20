// HeroSection.js
import '../styles/hero.css' // Import hero-specific styles

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        {/* <div className='icon-background'> */}
          <img
            className='money-magnet-icon'
            src='https://res.cloudinary.com/dovuffpii/image/upload/v1710297257/Money%20Magnet/mpney-magnet-icon_i1i3zt.svg'
            alt='Mony Magnet Logo'
          />
        {/* </div> */}
        {/* <div className='hero-text-container'> */}
          <h1 className='hero-heading'>Welcome to Money Magnet</h1>
          <p className='hero-subheading'>Empowering Your Financial Journey</p>
        {/* </div> */}
      </div>
    </div>
  )
}

export default HeroSection
import React from 'react'
