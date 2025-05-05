import { useCallback, useEffect, useState ,useRef} from 'react'

function App() {
  const [length,setLength] = useState(8);
  const [isCharAllowed,setCharAllowed]= useState(false)
  const [isNumberAllowed,setNumberAllowed] = useState(false)

  const [Password,setPassword]  = useState("")


  ///useRef Hook
  const passworCopy = useRef(null);

  const passwordClipboard = useCallback(()=>{
      passworCopy.current?.select();
      //Range the selected text
      //passworCopy.current?.setSelectionRange(0,9);
      window.navigator.clipboard.writeText(Password)
  },[Password])

  const passwordGenerator = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(isCharAllowed) str+="~!@#$%^&*()-_=+[{]};:'|<.>,'";
      if(isNumberAllowed) str+="0123456789";

      for(let i=0;i<length;i++){
          let char = Math.floor(Math.random()*str.length +1);
          pass += str.charAt(char)
      }

      setPassword(pass)
  } ,[length,isCharAllowed,isNumberAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[length,passwordGenerator,isCharAllowed,isNumberAllowed])
  return (
    <>
      <div className='bg-gray-800 w-full max-w-md mx-auto rounded-lg px-4 my-8  py-3 shadow-lg text-orange-500'>
      <h1 className='text-3xl text-center text-white my-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
          <input 
          type="text"
          value={Password}
          placeholder='Password'
          className='outline-none w-full py-1 px-3 bg-white'
          readOnly
          ref={passworCopy}
          />

          <button
          onClick={passwordClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-red-300'
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={isNumberAllowed}
              id ="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}
              />
              <label >
                Number
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={isCharAllowed}
              id ="charInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}
              />
              <label >
                Character
              </label>
            </div>


        </div>

      </div>
      <div className='text-xl text-center text-amber-200'>
        <p>developed by <a className='text-2xl text-blue-400' href="https://sajedullah-aref-104.vercel.app/">Sajedullah Aref</a></p>

      </div>
    </>
  )
}

export default App
