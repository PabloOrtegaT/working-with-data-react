import React from 'react';
import UserCard from './UserCard';
import { UsersContextConsumer } from './context/UserContext';
import './UserCardList.styles.css';

const UserCardList = () => {
	return (
		<UsersContextConsumer>
			{
				({users, deleteUser}) => (
				<div className= 'usercard-list'>
					{
						users.map(user => <UserCard 
						key={user.id}
						id={user.id}
						name={user.name} 
						email={`${user.name.split(' ')[0]}@robots.com`}
						biography={user.biography}
						password={user.password}
						username={user.username}
						logged={user.isLoggedIn}
						deleteUser={deleteUser}
						/>)
					}
				</div>
				)
			}
		</UsersContextConsumer>
		
	);
}

export default UserCardList; 