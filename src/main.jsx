import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/home.jsx'
import { CriarEvento } from './pages/CriarEvento/criarEvento.jsx'
import GlobalStyles from './styles/global.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Categorias } from './pages/Categorias/categorias.jsx'
import { Locais } from './pages/Locais/locais.jsx'
import { Login } from './pages/Login/login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/src/pages/CriarEvento/criarEvento.jsx",
    element: <CriarEvento />,
  },
  {
    path: "/src/pages/Categorias/categorias.jsx",
    element: <Categorias />,
  },
  {
    path: "/src/pages/Locais/locais.jsx",
    element: <Locais />,
  },
  {
    path: "/src/pages/Login/login.jsx",
    element: <Login />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
