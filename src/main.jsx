import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/home.jsx'
import GlobalStyles from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyles/>
  </React.StrictMode>,
)
