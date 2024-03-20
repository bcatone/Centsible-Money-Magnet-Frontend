import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/mainheader.css'

function Header() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignup = () => {
    navigate('/getstarted')
  }

  return (
    <div className='header'>
      <img
        src='https://res.cloudinary.com/dovuffpii/image/upload/v1710488987/Money%20Magnet/mpney-magnet-green-logo_hz_rg61hg.svg'
        alt='Money Magnet Logo'
        className='money-magnet-logo'
      />
      <div className='header-btns'>
        <button className='login-btn' onClick={handleLogin}>
          Login
        </button>
        <button className='signup-btn' onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Header
