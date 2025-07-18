import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';
import User from './components/user';
import Mount from './components/mount';


function App() {
  const [user, setUser] = useState({})
  
  return (
    <>
    <Mount/>
    {/* <User user={user}/>
    <button onClick={()=>setUser({name:"Mukesh",age:"25",gender:"Male"})}>User1</button>
    <button onClick={()=>setUser({name:"Sitaram",age:"65",gender:"Male"})}>User2</button>
    <button onClick={()=>setUser({name:"Mohit",age:"85",gender:"Female"})}>User3</button> */}
      {/* <Card text={text} setText={setText}/> */}
    </>
  )
}

export default App
