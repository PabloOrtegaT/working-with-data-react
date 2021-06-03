import React from 'react';
import UserCard from './UserCard';
import { UsersContextConsumer } from './context/UserContext';
import './UserCardList.styles.css';

const UserCardList = () => {
	return (
		<UsersContextConsumer>
			{
				({users, deleteUser, addUser}) => (
				<div className= 'usercard-list'>
					{
						users.map(user => <UserCard 
						key={user.id}
						id={user.id}
						name={`${user.first_name} ${user.last_name}`} 
						email={user.email}
						avatar={user.avatar == null ? `https://reqres.in/img/faces/${user.id}-image.jpg` : user.avatar}
						logged={user.isLoggedIn}
						deleteUser={deleteUser}
						addUser={addUser}
						/>)
					}
				</div>
				)
			}
		</UsersContextConsumer>
		
	);
}

export default UserCardList; 