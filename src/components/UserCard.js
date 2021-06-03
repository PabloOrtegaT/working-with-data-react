import React, { useContext } from 'react';
import { ThemeContextConsumer } from './context/ThemeContext';
import { UserContext } from './context/UserContext';
import './UserCard.styles.css';

const UserCard = ({ name, email, logged, id, deleteUser, avatar } ) => {

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
						
						<img alt='robots' src={avatar}/>
						<div className='usercard-item'>
							<h2>{name}</h2>
							<p>{email}</p>
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