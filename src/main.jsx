import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import './index2.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
 </BrowserRouter>
  
)
