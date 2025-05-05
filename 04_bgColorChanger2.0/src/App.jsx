
import React, { useState } from 'react';
import './App.css'

function App() {
  const [color,setColor] = useState('Yellow');

  return (
    <>
      <div className='w-full h-screen duration-200 items-center flex justify-center gap-4'
      style={{ backgroundColor:color }}
      >
      
        <button
          onClick={() => setColor('Blue')}
        >
        Blue</button>
        <button
        onClick={() => setColor('Black')}
        >Black</button>
        <button
        onClick={() => setColor('Yellow')}
        >Yellow</button>
        <button
        onClick={() => setColor('Red')}
        >Red</button>
      </div>
    </>
  )
}

export default App
