import { CardEventDiv } from './styles'
import { BiCalendar, BiMap, BiPurchaseTag } from 'react-icons/bi';

export function CardEvent() {
    return (
        <CardEventDiv>
            <div>
                <div>
                    <h3>Front-end Day</h3>
                    <div className="CardEventInfo">
                        <BiCalendar />
                        <p>23/01/2024 08:00:00</p>
                    </div>
                    <div className="CardEventInfo">
                        <BiMap />
                        <p>Fortaleza</p>
                    </div>
                    <div className="CardEventInfo">
                        <BiPurchaseTag />
                        <p>Educação</p>
                    </div>
                </div>
                <div className="CardEventBtn">
                    <button>Excluir evento</button>
                    <button>Editar evento</button>
                </div>
            </div>
            <div className="CardEventDescription">
                <p><strong>Descrição:</strong></p>
                <p>Um evento voltado para os amantes de Front-end ou para quem deseja expandir horizontes.</p>
            </div>



        </CardEventDiv>
    )
}