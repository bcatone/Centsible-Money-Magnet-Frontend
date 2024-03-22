import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/features.css'

//! Add screenshots from figma
const KeyFeatures = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/get-started')
  }

  return (
    <div className='key-features'>
      <h3 className='section-heading'>Why Choose Money Magnet?</h3>
      <div className='feature-container'>
        <div className='feature-image-wrapper'>
          <div className='feature-item'>
            <div className='content'>
              <h4 className='title'>Simplicity</h4>
              <p className='description'>
                Say goodbye to complex spreadsheets! Our app offers intuitive tools and a
                user-friendly interface powered by AI.
              </p>
            </div>
          </div>
          <img className='feature-image' src='' alt='key-feature-image' />
        </div>
        <div className='feature-image-wrapper'>
          <img className='feature-image' src='' alt='key-feature-image' />
          <div className='feature-item'>
            <div className='content'>
              <h4 className='title'>Personalization</h4>
              <p className='description'>
                Receive tailored insights and recommendations based on your financial habits and
                goals. Want to know if you can afford an impulse purchase? Just ask ** our
                insightful budget assistant to help you keep on track.
              </p>
            </div>
          </div>
        </div>
        <div className='feature-image-wrapper'>
          <div className='feature-item'>
            <div className='content'>
              <h4 className='title'>Security</h4>
              <p className='description'>
                Rest easy knowing your financial data is protected with state-of-the-art security
                measures.
              </p>
            </div>
          </div>
          <img className='feature-image' src='' alt='key-feature-image' />
        </div>
      </div>
      <div className='cta'>
        <p className='cta-header'>
          Elevate your financial game with Money Magnet. Start managing your money like a pro today!
        </p>
        <button className='sign-up-button' onClick={handleGetStarted}>
          Get Started Today
        </button>
      </div>
    </div>
  )
}

export default KeyFeatures
