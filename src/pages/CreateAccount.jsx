import React from 'react'
import { useNavigate } from 'react-router-dom'
import CreateAccountForm from '../components/CreateAccountForm'
import '../styles/createaccount.css'

function CreateAccount({ handleLogoClick }) {
  const navigate = useNavigate()

  const handleSignInLink = () => {
    navigate('/login')
  }

  return (
    <div className='create-account-page'>
      <div className='create-account-content'>
        <img
          className='money-magnet-icon'
          src='https://res.cloudinary.com/dovuffpii/image/upload/v1710488991/Money%20Magnet/money-magnet-green-logo_jpwctn.svg'
          alt='Money Magnet Icon'
          onClick={handleLogoClick}
        />
        <p className='create-accout-subheading'>
          Ready to transform your finances?
          <br />
          Dive into Money Magnet now and discover the power of intuitive money management!
        </p>
        <h3 className='create-accout-heading'>Get Started Today</h3>
        <CreateAccountForm />
        <div>
          <p className='privacy-stmnt'>
            By clicking the button above, you agree to our Terms of Use and Privacy Policy
          </p>
        </div>
        <p className='signin-link'>
          Already have an account?{' '}
          <span style={{ color: '#009933' }} onClick={handleSignInLink}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  )
}

export default CreateAccount
