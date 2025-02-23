import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('yellow')

  const changeColor = (c)=>{
        setColor(c)
  }
  return (
    
        <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
          <div className='fixed flex flex-wrap bottom-12 px-2 inset-x-0 justify-center'>
              <div className='gap-3 rounded-3xl flex flex-wrap justify-center bg-white shadow-lg px-4 py-2'>
                  <button
                  className='outline-none shadow-lg rounded-full px-4 py-1 text-white'
                  style = {{backgroundColor:"red"}}
                  onClick={()=>{setColor('red')}}
                  >
                    Red
                  </button>
                  <button
                  onClick={()=>{setColor('green')}}
                  className='outline-none shadow-lg rounded-full px-4 py-1 text-white'
                  style = {{backgroundColor:"green"}}
                  >
                    green
                  </button>
                  <button
                  onClick={()=>{setColor('orange')}}
                  className='outline-none shadow-lg rounded-full px-4 py-1 text-white'
                  style = {{backgroundColor:"orange"}}
                  >
                    orange
                  </button>
                  <button
                  onClick={()=>{setColor('black')}}
                  className='outline-none shadow-lg rounded-full px-4 py-1 text-white'
                  style = {{backgroundColor:"black"}}
                  >
                    black
                  </button>
              </div>
          </div>
        </div>
    
  )
}

export default App
