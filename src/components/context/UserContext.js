import React, { createContext, useState } from 'react';
import { USERS } from '../../users';

const UserContext = createContext();
const { Provider, Consumer } = UserContext;

const UsersContextProvider = (props) => {
    const [users, setUsers] = useState(USERS);

    const deleteUser = (userID) =>{
        setUsers((users) => users.filter(user => user.id !== userID));
    }

    const toggleLogIn = (userId) => {
        setUsers((users) => {
            return users.map(user => user.id === userId ? {...user, isLoggedIn: !user.isLoggedIn }  : user);
        })   
    }
 
    return (
        <Provider value={{ users, deleteUser, toggleLogIn }}>
            {props.children}
        </Provider>
    )
}

export { UserContext, UsersContextProvider, Consumer as UsersContextConsumer };