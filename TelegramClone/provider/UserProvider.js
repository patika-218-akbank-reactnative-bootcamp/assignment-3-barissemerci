import React, {useState} from 'react';
import {UserContext} from '../context/user';

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const handleNewUser = newUser => {
    const userNew = newUser;
    setUser(userNew);
  };

  return (
    <UserContext.Provider value={{user, setUser, handleUser: handleNewUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
