import React from 'react'
import { useNavigate } from 'react-router-dom'

function Intro() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/get-started')
  }

  return (
    <div className='intro'>
      <h3>Discover the Smart Way to Manage Your Finances</h3>
      <p className='intro-subheading'>Powered by WitAI</p>
      <p>
        Unlock financial clarity, enhance your financial know-how, and embrace a worry-free
        financial journey. Manage your account balances, transactions, and investments effortlessly
        in a cutting-edge platform designed for individuals who seek simplicity and efficiency.
        Collaborate seamlessly with your partner to accelerate your financial progress.
      </p>
      <button className='sign-up-button' onClick={handleGetStarted}>
        Get Started Today
      </button>
    </div>
  )
}

export default Intro
