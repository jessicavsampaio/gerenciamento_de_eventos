import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/home.jsx'
import { CriarEvento } from './pages/CriarEvento/criarEvento.jsx'
import GlobalStyles from './styles/global.js'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Categorias } from './pages/Categorias/categorias.jsx'
import { Locais } from './pages/Locais/locais.jsx'
import { Login } from './pages/Login/login.jsx'
import { Cadastro } from './pages/Cadastro/cadastro.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/evento",
    element: <CriarEvento />,
  },
  {
    path: "/categoria",
    element: <Categorias />,
  },
  {
    path: "/local",
    element: <Locais />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
