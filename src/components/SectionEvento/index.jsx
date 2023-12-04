import { SectionEventoDiv } from './styles'
import { BiCalendar, BiMap, BiPurchaseTag } from 'react-icons/bi';
import { BsFileText } from "react-icons/bs";

export function SectionEvento() {
    return (
        <SectionEventoDiv>
            <div>
                <div className='Section'>
                    <h3>Evento</h3>
                    <div className="nome">
                        <p>Nome do evento: </p>
                        <input type="text" required />
                    </div>
                    <div className="data">
                        <BiCalendar />
                        <p>Data: </p>
                        <input type="datetime" name="datetime" id="datetime" required />
                    </div>
                    <div className="localId">
                        <BiMap />
                        <p>ID do local: </p>
                        <input type="number" required min={0} />
                    </div>
                    <div className="categoriaId">
                        <BiPurchaseTag />
                        <p>ID da categoria: </p>
                        <input type="number" required min={0} />
                    </div>
                    <div className="descricao">
                        <BsFileText />
                        <p>Descrição: </p>
                        <input type="text" required />
                    </div>
                    <div >
                        <button className='cadastroEventoBtn' type="submit">Cadastrar evento</button>
                    </div>
                </div>

            </div>




        </SectionEventoDiv>
    )
}