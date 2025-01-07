import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'

function Button() {
  return (
    <button>Click</button>
  )
}

function App() {


  return (
    <>
      <h1>Welcome to react app</h1>
      <Button />
      <User />
    </>
  )
}

export default App
