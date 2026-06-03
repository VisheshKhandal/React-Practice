import React, { useState, useContext } from 'react';
import UserContext from '../context/Usercontext';

function Login() {
    const[username, setUsername] = React.useState('');
    const[password, setPassword] = React.useState('');
    const {setUser} = useContext(UserContext);
    const handlesubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
    return(
        <div>
            <h2>Login</h2>
            <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}
export default Login;
