import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userID } = useParams()
  return (
    <div>
        <h1 className='text-4xl p-4 bg-gray-400'>User : {userID} </h1>
    </div>
  )
}

export default User