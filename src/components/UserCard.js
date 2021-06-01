import React from 'react';

const UserCard = ({ name, biography, email, username, password, logged, id } ) => {
	return (
		<div className='tc w5 dib br3 pa3 ma3 bw2 shadow-5' >
            {logged ? <button>Log out</button> : <button>Log in</button>}
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
                <p>about: {biography}</p>
                <p>username: {username}</p>
                <p>password: {password}</p>
                {logged ? <p>Logged in</p> : null}
                {logged ? <button>Delete</button> : null}
			</div>
		</div>
		
	);
}

export default UserCard;
// //tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5