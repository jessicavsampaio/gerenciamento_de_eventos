import { Link } from 'react-router-dom'
import { HeaderDiv, HeaderNav } from './styles'
import {BiUserCircle } from 'react-icons/bi'

export function Header() {
    return (

        <HeaderDiv>
            <div>
                <a href="/"><h2>Gerenciamento de Eventos Culturais</h2></a>
            </div>
            <HeaderNav>
                <Link to={`/`}>
                    Home
                </Link>
                <Link to={`/src/pages/CriarEvento/criarEvento.jsx`}>
                    Criar eventos
                </Link>
                <Link to={`/src/pages/Categorias/categorias.jsx`}>
                    Categorias
                </Link>
                <Link to={`/src/pages/Locais/locais.jsx`}>
                    Locais
                </Link>
                <Link to={`/src/pages/Cadastro/cadastro.jsx`}>
                    <BiUserCircle />
                </Link>
                
            </HeaderNav>
        </HeaderDiv>

    )
}