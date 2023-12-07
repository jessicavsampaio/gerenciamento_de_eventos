import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global.js'
import { RouterProvider, } from "react-router-dom";
import { routes } from './Routes/app.routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
