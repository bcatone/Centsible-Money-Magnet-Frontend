import React, { createContext, useState, useContext} from 'react'

const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)

function UserProvider({ children}) {
  const [user, setUser] = useState([])
  // const [household, setHousehold] = useState{{}}

  const loginUser = (userData) => {
    setUser(userData)
  }

  return <UserContext.Provider value={{ user, loginUser }}>{children}</UserContext.Provider>

}

export default UserProvider