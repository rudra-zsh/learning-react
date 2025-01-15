import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Any from './butt.jsx'

function App() {
let [count, setCount] = useState(0);

	function handleClick(){
	setCount(count+1);	
		console.log(count);
	}
	


	return(
		<>
		<button onClick={handleClick}>
		Count {count}	
		</button>


		<br />
		<Any />
		<br />
		<Any />
		</>
	)





}

export default App
