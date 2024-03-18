// Login.jsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  // Simulate a successful login and set the user data
  const handleLogin = () => {
    setUser({
      id: 1,
      username: 'testuser',
      email: 'testuser@example.com',
      // other user data as needed
    });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;