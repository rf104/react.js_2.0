import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rf104')
    //     .then((res)=> res.json())
    //     .then((resp)=> { 
    //         console.log(resp);
    //         setData(resp);
    //     })
    // },[])

  return (
    <div>
        <h1 className='bg-cyan-400 text-4xl p-2 text-center mb-2'>Welcome to visit the GitHub Profile of {data.name}</h1>
        <h1 className='text-2xl text-center p-4 bg-gray-600 '> GitHub Followers : {data.followers} </h1>
        <h1 className='text-2xl text-center p-4 bg-gray-600 mt-2'> GitHub Followings : {data.following} </h1>
        <div className='flex justify-center items-center gap-2 mt-4 mb-4'>
            <img src={data.avatar_url} alt="Avatar" className='rounded w-1/4 h-1/4' />
        </div>
    </div>
  )
}

export default Github


export const githubInfoLoader = async()=>{
    const response  = await fetch('https://api.github.com/users/rf104')
    
    return response.json()
}