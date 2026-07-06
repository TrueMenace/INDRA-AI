import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MemoryProvider } from './context/MemoryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoryProvider>
    <App />
    </MemoryProvider>
  </StrictMode>,
)
