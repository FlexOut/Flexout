import React, { Component } from "react";
import { useState } from 'react'
import { login } from '../../services/auth'
import './login-signup.css'


export default function Login(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(username, password)

		login(username, password)
			.then(response => {
				console.log(response);
				if (response.message) {
					// reset the form 
					setUsername('');
					setPassword('');
					// set the message
					setMessage(response.message);
				} else {
					// user is correctly signed up in the backend
					// add the user to the state of App.js
					props.setUser(response);
					// redirect to the workouts overview
					props.history.push('/workouts');
				}
			})
			.catch(err => console.log(err));
	}


        return (
			<div className='signupForm'>
            <form onSubmit={handleSubmit}>
                <h3> Log In </h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={username} placeholder="Your username" onChange={e => setUsername(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>


	
                <button type="submit" className="btn btn-dark btn-block" onClick={event =>  window.location.href='/home'}>Submit</button>
                

            </form>
			</div>
        );
    }
