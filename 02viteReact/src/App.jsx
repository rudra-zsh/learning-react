import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import List from './List.jsx'

function Button() {
  function sayHi(){
    alert("Oh, Hello mate!")
  }
  return (
    <button onClick={sayHi}>Click</button>
  )
}

function App() {


  return (
    <>
      <h1>Welcome to react app</h1>
      <Button />
      <br />
      <User />
      <br />
      <List />
    </>
  )
}

export default App
