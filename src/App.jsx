import React, {useContext} from 'react';
import Landing from './pages/Landing';
import UserContextProvider from './contexts/UserContext';
import ConnectPlaid from './components/ConnectPlaid'

function App() {
  return (
      <UserContextProvider>
        <div>
          <h1>Money Magnet</h1>
          <ConnectPlaid />
        </div>
      </UserContextProvider>
  );
}

export default App;