import React from 'react'
import ReactDOM from 'react-dom/client'
import User from './pages/user'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <User />
  </BrowserRouter>
)
