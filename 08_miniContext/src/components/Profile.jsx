import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);
    if(!user) return <div>Please Login!!</div>
    return(
        <div>
            <h1>Profile</h1>
            <h2>{user.username}</h2>
            <h2>{user.password}</h2>
        </div>
    )
}

export default Profile