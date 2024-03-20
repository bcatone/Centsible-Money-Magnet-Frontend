import React, { useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'

async function getUserInfo(codeResponse) {
  var response = await fetch('/google_login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code: codeResponse.code }),
  })
  return await response.json()
}

async function getProtected() {
  var response = await fetch('/protected', {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((msg) => console.log(msg))
}
export default function Auth() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      var loginDetails = await getUserInfo(codeResponse)
      setLoggedIn(true)
      setUser(loginDetails.user)
    },
  })

  const handleLogout = () => {
    getProtected()
    setLoggedIn(false)
  }

  return (
    <>
      {!loggedIn ? (
        <button className='google-btn' onClick={() => googleLogin()}>
          Log in with Google
        </button>
      ) : (
        <div userName={user.name} onClick={handleLogout}></div>
      )}
    </>
  )
}
