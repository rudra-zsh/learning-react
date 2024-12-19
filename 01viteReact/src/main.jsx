import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from './Name.jsx'
import {React} from 'react'
import ReactDOM from 'react-dom/client';
/*
var Name = createRoot(document.getElementById('name')
	Name.render(
		<React.StrictMode>
		<Name />
		</React.StrictMode>
	)
*/
var user = 'robot'
function Phul(){
return (	<a href="https://google.com"><h1>Hello {user}</h1></a>
)
}
/*
const reactElement = React.createElement('a',{href:"https://google.com"},
	'Google Link')


ReactDOM.createRoot(document.getElementById('root')).render(
	reactElement
)
*/
const reactElement = (
	<a href="https://google.com">Google</a>
)

const reactProperElement = React.createElement(
	'a',
	{href:"https://google.com" , target:'balnk'},
	'Google'
)
/*
var rb = createRoot(document.getElementById('root'))
	rb.render(
	<StrictMode>
	<Phul />
reactProperElement
		<App />
	</StrictMode>


)
*/
ReactDOM.createRoot(document.getElementById('root')).render
(
	<App />
)
