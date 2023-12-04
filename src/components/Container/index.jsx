import { ContainerDiv } from "./styles"
import { BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";

export function Container({ title }) {
    return (
        <ContainerDiv>
            <h1>{title}</h1>
            <Link to={`/src/pages/CriarEvento/criarEvento.jsx`}>
                Criar novo
                <BiAddToQueue />
            </Link>

        </ContainerDiv>
    )
}