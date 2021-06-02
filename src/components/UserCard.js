import React, { useContext } from 'react';
import { ThemeContextConsumer } from './context/ThemeContext';
import { LoginContext } from './context/LoginContext';
import { UserContext } from './context/UserContext';
import './UserCard.styles.css';

const UserCard = ({ name, biography, email, username, password, logged, id, deleteUser } ) => {

	const { toggleLogIn } = useContext(UserContext);

	const handlerDeleteUser = () => {
		deleteUser(id);
	}

	const handlerLogIn = () => {
        toggleLogIn(id);
    }

	return (
		<ThemeContextConsumer>
			{
				({ theme }) => (
					<div className= {`${theme} usercard-container` }>
						<div> 
							<button className={`${theme} button`} onClick={handlerLogIn} > { logged ? 'Log Out': 'Log In'}</button>
						</div>
						
						<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
						<div className='usercard-item'>
							<h2>{name}</h2>
							<p>{email}</p>
							<p>about: {biography}</p>
							<p>username: {username}</p>
							<p>password: {password}</p>
							{logged ? <p>Logged in</p> : null}
							{logged ? <button className={`${theme} button`} onClick={handlerDeleteUser} >Delete</button> : null}
						</div>
					</div>
				)
			}
		</ThemeContextConsumer>
	);
}

export default UserCard;