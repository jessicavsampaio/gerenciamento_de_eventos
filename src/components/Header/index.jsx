import { HeaderDiv, HeaderNav } from './styles'

export function Header() {
    return (
        <div>
            <HeaderDiv>
                <div>
                    <a href="#"><h2>Gerenciamento de Eventos Culturais</h2></a>
                </div>
                <HeaderNav>
                    <a href="#">Eventos</a>
                    <a href="#">Categorias</a>
                    <a href="#">Locais</a>
                    <a href="#">Login</a>
                </HeaderNav>
            </HeaderDiv>
        </div>
    )
}