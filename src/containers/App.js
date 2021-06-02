import { USERS } from '../users';
import './App.css';
import React, { useContext } from 'react';
import UserCardList from '../components/UserCardList';
import Button from '../components/Button';
import { ThemeContext } from '../components/context/ThemeContext';

const App = () => {  
    const { theme } = useContext(ThemeContext);

    return (
      <div className="App">
          <Button />
          <UserCardList>
          </UserCardList>
      </div>
    );
  
}

export default App;
