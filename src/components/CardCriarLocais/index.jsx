import { CardCriarLocaisDiv } from './styles'
import { MdPlace } from "react-icons/md";


export function CardCriarLocais() {
    return (
        <CardCriarLocaisDiv>
            <div className='Container'>
                <div className='Section'>
                    <h3>Local</h3>
                    <div className="local">
                        <MdPlace />
                        <p>Local: </p>
                    </div>
                    <input type="text" name="local" id="local" required />

                    <button className="cadastroLocalBtn" type="submit">Cadastrar Local</button>
                </div>
            </div>




        </CardCriarLocaisDiv>
    )
}