import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { EmailProvider } from './StateManagement/EmailContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   


    <EmailProvider>   <App /> </EmailProvider>
   
  </StrictMode>,
)
