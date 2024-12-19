import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from './Name.jsx'

const element = createRoot(document.getElementById('root'))

element.render(
	<StrictMode>
	<App />
	</StrictMode>,

)
