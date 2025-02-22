import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const user = {
    name : 'Aref',
    age : 22,
  }

  const myArr = [1,2,4,5,6];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-sm mb-4'>Tailwind Testing</h1>
      <Card userName = "Sajedullah Aref" someObj={user} someArray = {myArr} />
      <Card />
    </>
  )
}

export default App
