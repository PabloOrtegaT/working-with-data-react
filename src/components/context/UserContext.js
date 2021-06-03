import React, { createContext, useState, useEffect } from 'react';
import { USERS } from '../../users';
import axios from 'axios';

const UserContext = createContext();
const { Provider, Consumer } = UserContext;

const UsersContextProvider = (props) => {
    //const [users, setUsers] = useState(USERS);
    const [users, setUsers] = useState(USERS);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://reqres.in/api/users',
        );
   
        setUsers(result.data.data);
      };
   
      fetchData();
    }, []);

    const deleteUser = (userID) =>{
        setUsers((users) => users.filter(user => user.id !== userID));
    }

    const toggleLogIn = (userId) => {
        setUsers((users) => {
            return users.map(user => user.id === userId ? {...user, isLoggedIn: !user.isLoggedIn }  : user);
        })   
    }

    const addUser = async (user) => {
        try {
          const { firstName, lastName, email, job } = user;
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: firstName, job: job })
          };
  
          const response = await fetch('https://reqres.in/api/users', requestOptions);
          const data = await response.json();
          const newUser = {
            id: `${data.id}`,
            email: email,
            first_name: firstName,
            last_name: lastName,
            avatar: `https://robohash.org/${data.id}?200x200`
          }
          setUsers((users) => [...users, newUser]);
  
        } catch(e) {
          alert('Error posting User');
      }
    }
 
    return (
        <Provider value={{ users, deleteUser, toggleLogIn, addUser }}>
            {props.children}
        </Provider>
    )
}

export { UserContext, UsersContextProvider, Consumer as UsersContextConsumer };