import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from './Name.jsx'
import {React} from 'react'

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
return (	<h1>Hello {user}</h1>
)
}
/*
const reactElement = React.createElement('a',{href:"https://google.com"},
	'Google Link')


ReactDOM.createRoot(document.getElementById('root')).render(
	reactElement
)
*/

var rb = createRoot(document.getElementById('root'))
	rb.render(

	<StrictMode>
	<Phul />
		reactElement
		<App />
	</StrictMode>

)
