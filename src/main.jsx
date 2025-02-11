import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/context.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <ToastContainer />
      <App />
    </AppContextProvider>
  </StrictMode>,
)
