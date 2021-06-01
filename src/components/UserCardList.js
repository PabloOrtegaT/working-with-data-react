import React from 'react';
import UserCard from './UserCard';

const UserCardList = ({users}, {logins}) => {
	return (
		<div>
		    {users.map((user,i) =>{
		return  (<UserCard 
			key={i} 
			id={users[i].id} 
			name={users[i].name} 
			email={`${users[i].name.split(' ')[0]}@robots.com`}
			biography={users[i].biography}
			password={users[i].password}
			username={users[i].username}
			logged={users[i].isLoggedIn}
			/>
		);
		})}
	   </div>
	);
}

export default UserCardList; 