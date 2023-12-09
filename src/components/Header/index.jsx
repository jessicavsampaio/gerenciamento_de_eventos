import { Link } from 'react-router-dom'
import { HeaderDiv, HeaderNav } from './styles'
import { BiUserCircle } from 'react-icons/bi'

export function Header() {
    return (

        <HeaderDiv>
            <div style={{ display: "flex" }}>
                <a href="/"><img src="../Imagem/LogoPoloNorte.png" alt="Logotipo de um urso polar" /></a>
            </div>
            <HeaderNav>
                <Link to={`/`}>
                    Home
                </Link>
                <Link to={`/evento`}>
                    Criar eventos
                </Link>
                <Link to={`/categoria`}>
                    Categorias
                </Link>
                <Link to={`/local`}>
                    Locais
                </Link>
                <Link to={`/login`}>
                    <BiUserCircle />
                </Link>

            </HeaderNav>
        </HeaderDiv>

    )
}
