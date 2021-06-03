import './App.css';
import React, { useContext, useState, useEffect } from 'react';
import UserCardList from '../components/UserCardList';
import Button from '../components/Button';
import UserForm from '../components/UserForm'
import { ThemeContext } from '../components/context/ThemeContext';


const App = () => {  
    const { theme } = useContext(ThemeContext);
    

    return (
      <div className="App">
          <Button />
          <UserCardList>
          </UserCardList>
          <UserForm></UserForm>
      </div>
    );
  
}

export default App;
