import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button(){
  return(
    <button>Click</button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to react app</h1>
    <Button />
      </>
  )
}

export default App
