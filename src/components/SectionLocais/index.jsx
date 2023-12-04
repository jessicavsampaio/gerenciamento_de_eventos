import { SectionLocaisDiv } from './styles'
import { MdPlace } from "react-icons/md";


export function SectionLocais() {
    return (
        <SectionLocaisDiv>
            <div className='Container'>
                <div className='Section'>
                    <h3>Local</h3>
                    <div className="local">
                        <MdPlace />
                        <p>Local: </p>
                        <input type="text" name="local" id="local" required />
                    </div>

                    <div>
                        <button className="cadastroLocalBtn" type="submit">Cadastrar Local</button>
                    </div>
                </div>
            </div>




        </SectionLocaisDiv>
    )
}