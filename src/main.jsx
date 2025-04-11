import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AnimatePresence mode='wait' initial="false">
      <App />
    </AnimatePresence>
    </BrowserRouter>
  </StrictMode>,
)
