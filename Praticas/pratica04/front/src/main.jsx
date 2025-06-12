import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RotaProvider } from './contexts/RotaContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RotaProvider>
      <App />
    </RotaProvider>
  </StrictMode>
)