import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameChangerClass from './componants/counter/count'
import CounterClass from './componants/counterClass/counter'
import Child from './componants/ChildComponent'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const handleChange = ()=>{
    setCount(count+1)
    setCount1(count1+10)
  }

  return (
    <>
      <Child count={count} count1={count1}/>
     <button onClick={handleChange}>
          count is {count}
        </button>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <CounterClass/> */}
      {/* <NameChangerClass/> */}
      
    </>
  )
}


export default App
