import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {

let [value,setCounter] = useState(15)


function inc(){

	console.log(value+1)
value = value +1
setCounter(value)
}


function dcr(){
	console.log(value-1)
value = value -1
setCounter(value)
}




	return (
<div>
<h1>Learing Hooks</h1> 
<h2>Counter Value:{value} </h2>
<button onClick={inc}>Increase Value </button>
<br />
<button onClick={dcr}>Decrease Value </button>
	  </div> 
  )
}

export default App
