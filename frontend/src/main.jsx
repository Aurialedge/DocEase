import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
//  BrowserRouter helps in routing add routes inside the tags
    <BrowserRouter>
      <App />
    </BrowserRouter>
 
)
