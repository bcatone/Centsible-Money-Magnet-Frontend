import React, { useState } from 'react'

function CreateAccountForm() {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmation: '',
  })

  // refector the sign in page to this
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.password !== formData.confirmation) {
      setError('Passwords do not match.')
      return
    }
    setError('') // Clear any previous error
    console.log('Form data submitted:', formData)
    // Proceed with form submission logic here
  }

  return (
    <form className='create-account-form' onSubmit={handleSubmit}>
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
          placeholder='Create a Username'
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
          placeholder='Create a Password'
          minLength={12}
          required
        />
      </div>
      <div className='form-group'>
        <label className='form-label' htmlFor='password'>
          Password
        </label>
        <input
          id='confirm-password'
          type='password'
          name='confirmation'
          value={formData.confirmation}
          onChange={handleChange}
          placeholder='Re-Enter Password'
          minLength={12}
          required
        />
      </div>
      <button className='create-account-btn' type='submit'>
        Sign Up
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default CreateAccountForm
