import React, { useState } from 'react';
import { UserContext, UsersContextConsumer, UsersContextProvider } from './context/UserContext';
import './UserCardList.styles.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UserCard from './UserCard'

const UserForm = ({addUser}) => {
    const [formInfo, setFormInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        job: '',
    });
    
    const handleChangeField = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (cb) => {
        const newUser = {
            firstName: formInfo.firstName,
            lastName: formInfo.lastName,
            email: formInfo.email,
            job: formInfo.job
        };

        cb(newUser);
        setFormInfo({ firstName: '', lastName: '', email: '', job: '' });
    }

	return (
        <UsersContextConsumer>
        {
            ({addUser}) => (
                <div className='form-container'>
                    <h2>Add User -post-</h2>
                    <form className='form-labels'>
                        <TextField id='firstName' label='First Name' value={formInfo.firstName} onChange={handleChangeField} margin='dense'/>
                        <TextField id='lastName' label='Last Name' value={formInfo.lastName} onChange={handleChangeField} margin='dense'/>
                        <TextField id='email' label='Email' value={formInfo.email} onChange={handleChangeField} margin='dense'/>
                        <br />
                        <Button color="primary" variant="contained" onClick={()=>{handleSubmit(addUser)}}> Add </Button>
                    </form>
                </div>
            )
        }
        </UsersContextConsumer>
			
        
	);
}

export default UserForm; 