import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'

function LoginForm({ handleLogoClick }) {
  const navigate = useNavigate()
  // Format login data for server
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmation: '',
  })

  // Display the error when confirmation password is not same as password
  const [error, setError] = useState('')

  // Format login data for server
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  //Function to handle get started/ create account navigation
  const handleSignup = () => {
    navigate('/get-started')
  }

  // Function to submit login form
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmation) {
      setError('Passwords do not match.')
      return
    }
    setError('') // Clear any previous errors
    console.log('Form data submitted:', formData)
    //! Proceed with form submission logic here
  }

  return (
    <form className='form-background' onSubmit={handleSubmit}>
      <div className='logo-background' onClick={handleLogoClick}>
        <img
          className='login-logo'
          src='https://res.cloudinary.com/dovuffpii/image/upload/v1710297257/Money%20Magnet/mpney-magnet-icon_i1i3zt.svg'
          alt='Mony Magnet Logo'
        />
      </div>
      <div className='secure-login'>
        <img
          src='https://res.cloudinary.com/dovuffpii/image/upload/v1710813514/Money%20Magnet/secure-login_epsl9j.svg'
          alt='Secure Login'
          className='secure-login-icon'
        />
        <p className='secure-login-message'>Money Magnet Secure Login</p>
      </div>
      <div>
        <h4 className='welcome-message'>Please log in to continue</h4>
      </div>
      <div>
        <div>
          <div className='form-group'>
            <label className='form-label' htmlFor='username'>
              Username
            </label>
            <input
              id='username'
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='Enter Your Username'
              required
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='password'>
              Password
            </label>
            <input
              id='password'
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter Password'
              minLength={12}
              required
            />
          </div>
          {error && <p className='error-msg'>{error}</p>}
        </div>
        <div className='form-btns'>
          <button className='submit-btn' type='submit'>
            Log in with Email
          </button>
        </div>
          <p className='form-link' onClick={handleSignup}>
            New here? Click here to create a free account today!
          </p>
      </div>
    </form>
  )
}

export default LoginForm