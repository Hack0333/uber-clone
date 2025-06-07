import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import UserState from './context/UserContext.jsx'
import CaptainState from './context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainState>
    <UserState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserState>
    </CaptainState>
  </StrictMode>,
)
