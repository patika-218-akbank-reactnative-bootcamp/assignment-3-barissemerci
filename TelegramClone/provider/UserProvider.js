import React, {useState} from 'react';
import { UserContext } from '../context/user';




const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const handleNewUser = (user) => {
        const userNew=user
        setUser(userNew);
     
    }


    return(
        <UserContext.Provider value = {{user, setUser, handleUser:handleNewUser}}>
            {children}
        </UserContext.Provider>

 
    );

};

export default UserProvider;