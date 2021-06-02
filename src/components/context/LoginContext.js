import React, { createContext, useState } from 'react';
import { USERS } from '../../users';

const LoginContext = createContext();
const { Provider, Consumer } = LoginContext

const LoginContextProvider = (props) => {
    const [loginInfo, setLoginInfo] = useState(USERS);

    const toggleLogIn = (userId) => {
        setLoginInfo((loginInfo) => {
            return loginInfo.map(user => user.id === userId ? {...user, isLoggedIn: !user.isLoggedIn }  : user);
        })   
    }
    
    return (
        <Provider value={{ loginInfo, toggleLogIn }}>
            {props.children}
        </Provider>
    )
}

export { LoginContext, LoginContextProvider, Consumer as LoginContextConsumer };