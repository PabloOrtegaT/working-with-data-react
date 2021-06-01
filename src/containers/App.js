// import UserCardList from '../components/CardList';
import { users } from '../users';
// import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import React from 'react';
import UserCardList from '../components/UserCardList';

class App extends React.Component {  
  
  constructor(){
		super()
		this.state = {
			users: []
		}
	}

  render(){
    return <div className="App">
      <header className="App-header">
        <UserCardList 
          users={users} 
        />
      </header>
    </div>
  }
  
}

export default App;
