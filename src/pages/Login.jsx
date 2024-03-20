import React from 'react'
import LoginForm from '../components/LoginForm'

function Login({ handleLogoClick }) {
  return (
    <div className='login-page'>
      <LoginForm handleLogoClick={handleLogoClick} />
    </div>
  )
}

export default Login