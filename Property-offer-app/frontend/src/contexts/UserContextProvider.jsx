import React, { useState } from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const str1 = 'random string'
  return (
    <UserContext.Provider value={{loggedIn, setLoggedIn,userInfo, setUserInfo, str1 }}>

    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider