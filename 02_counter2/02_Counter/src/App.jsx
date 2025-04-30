import { useState } from 'react'

import './App.css'

function App() {
  
  const [counter, setValue]  = useState(0);

  const addval =  ()=>{

    const cn = counter + 1;
    if(cn>20){
      setValue(counter);
    }
    else setValue(cn);
  
  }

  const decVal = ()=>{
    const cn = counter - 1;
    if(cn<0){
      setValue(0);
    }
    else setValue(cn);
  }
  return (

    <>
      <h1>Counter {counter}</h1>
      <button
      onClick={addval}
      >Add Value {counter}</button>
      <br />
      <button onClick={decVal}>Sub Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
