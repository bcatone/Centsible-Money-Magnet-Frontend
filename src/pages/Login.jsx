import React, { useState, useEffect, useCallback } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { usePlaidLink } from 'react-plaid-link'
import LoginForm from '../components/LoginForm'

function Login({ handleLogoClick }) {
  const [linkToken, setLinkToken] = useState(null)

//   const generateToken = async () => {
//     const response = await fetch('/api/create_link_token', {
//       method: 'POST',
//     })
//     const data = await response.json()
//     setLinkToken(data.link_token)
//   }

//   useEffect(() => {
//     generateToken()
//   }, [])

//   return linkToken != null ? <Link linkToken={linkToken} /> : null
// }

// const Link = (props) => {
//   const onSuccess = useCallback((public_token, metadata) => {
//     // send public_token to server
//     const response = fetch('/api/set_access_token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ public_token }),
//     })
//     // Handle response ...
//   }, [])

//   const config = {
//     token: props.linkToken,
//     onSuccess,
//   }

//   const { open, ready } = usePlaidLink(config)

  return (
    <div className='login-page'>
      <LoginForm handleLogoClick={handleLogoClick} />
    </div>
  )
}

export default Login
