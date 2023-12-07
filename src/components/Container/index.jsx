import { ContainerDiv } from "./styles"
import { BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";

export function Container({ title }) {
    return (
        <ContainerDiv>
            <h1>{title}</h1>
            <Link to={`/evento`}>
                Criar novo
                <BiAddToQueue />
            </Link>

        </ContainerDiv>
    )
}