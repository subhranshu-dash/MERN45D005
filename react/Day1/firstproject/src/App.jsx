import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./Nav";
import Login from './Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Login/><br></br>
        <Nav/>
        
      </div>
    </>
  )
}
 
export default App
