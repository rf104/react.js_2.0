import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword]  = useState('');
    
    const {setUser} = useContext(UserContext);
    const submitHandle = (e)=>{
        e.preventDefault();
        setUser({username,password});
    }

  return (
    <div>
        <h1>Login</h1>
        <input type='text' 
                placeholder='username'
                value = {username}
                onChange={(e)=> setUsername(e.target.value)}
        />
        {"    "}
        <input type='password' 
        value = {password}
        onChange= {(e)=> setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={submitHandle}>Login</button>
    </div>
  )
}

export default Login