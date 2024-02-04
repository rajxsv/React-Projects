import { useState , useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) chars += "1234567890"
      if(charAllowed) chars += "!@#~$%^&*()_+-={}|[]:'?><,./"

      for(let i=0; i<length; i++) {
        let index = [Math.floor(Math.random()*(chars.length-1) + 1)]%(chars.length-1)
        pass += chars[index]
      } 
      
      setPassword(pass)
    },
    [length, numberAllowed, charAllowed, setPassword],
  )
  

  // The goal of CallBack is to cache the things 
  // the goal of useEffect is to run when change in dependencies , useEffect is also fired up upon first refresh of website

  // useEffect(()=>{},[])
  useEffect(()=>{
    passwordGenerator()
  },[
    length,
    numberAllowed,
    charAllowed,
    passwordGenerator
  ])
  const passwordRef = useRef(null)

  const copyToUser = useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-mid-rounded-lg px-1 my-8 text-orange-500 bg-gray-700'  >
      <h1 className='px-5 text-4xl font-mono text-center text-white my-4' >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref = {passwordRef}
           />
           <button onClick={copyToUser} > Copy </button>
        </div>
        <div>
          <input 
            type='range'
            min = {6}
            max = {100}
            value = {length}
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label> Length : {length} </label>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500"
          checked={charAllowed}
          onChange={()=>{
            setCharAllowed(prev => !prev)
          }}
        />
        <label htmlFor="checkbox1" className="ml-2">
          Characters
        </label>
      </div>

      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500"
          checked={numberAllowed}
          onChange={()=> {
            setNumberAllowed(prev => !prev)
          }}
        />
        <label htmlFor="checkbox2" className="ml-2">
          Numbers
        </label>
      </div>
    </div>
      </div>
    </>
  )
}

export default App
