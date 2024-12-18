import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from './Name.jsx'
/*
var Name = createRoot(document.getElementById('name')
	Name.render(
		<React.StrictMode>
		<Name />
		</React.StrictMode>
	)
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Name />
	<App />
  </StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	<Name />
	<App />
	</React.StrictMode>,
)

var root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
<Name />
	<App />
	</React.StrictMode>,
)
