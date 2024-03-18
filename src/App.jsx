import React from 'react';
import { UserContextProvider } from './UserContext';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <ComponentA />
        <ComponentB />
      </div>
    </UserContextProvider>
  );
}

export default App;