import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0)
  // let counter = 15; 

  const addValue = ()=>{
    console.log('Add Button Clicked',Math.random())
    // counter++; this will not work cause In react We don't authoruty to modify the UI directly....for modifying the UI we need useState() hook
  
    setCounter(counter+1);
  }
  const decValue = ()=>{
    if(counter==0){}
    else setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter :{counter} </h2>

      <button
      onClick={addValue}
      >Add Count</button>
      <button
      onClick={decValue}
      >Dec Count</button>
    </>
  )
}

export default App
