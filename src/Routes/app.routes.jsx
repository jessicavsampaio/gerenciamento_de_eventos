import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home/home.jsx'
import { CriarEvento } from '../pages/CriarEvento/criarEvento.jsx'
import { Categorias } from '../pages/Categorias/categorias.jsx'
import { Locais } from '../pages/Locais/locais.jsx'
import { Login } from '../pages/Login/login.jsx'
import { Cadastro } from '../pages/Cadastro/cadastro.jsx'
import { EditarEvento } from '../pages/EditarEvento/editarEvento.jsx'

export const routes = createBrowserRouter([
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
    },
    {
        path: "/editarEvento/:id",
        element: <EditarEvento />,
    }
]);