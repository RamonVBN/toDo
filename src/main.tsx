import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from './App.tsx'
import { globalStyles } from './lib/stitches.ts'

globalStyles()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
