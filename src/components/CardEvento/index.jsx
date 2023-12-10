import { CardEventDiv } from './styles'
import { BiCalendar, BiMap, BiPurchaseTag } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { Link } from 'react-router-dom';
import { ExcluirEvento } from '../DeletarEvento/deletarEvento';

export function CardEvent() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        api.get("/event")
            .then((response) => {
                setCards(response.data)
            })

            .catch(() => {
                console.log("deu ruim!!!!")
            })

    }, [])

    return (

        <div>

            {cards.map((event) => {

                return (

                    <CardEventDiv key={event.id}>

                        <div>
                            <div>
                                <h3>{event.name}</h3>
                                <div className="CardEventInfo">
                                    <BiCalendar />
                                    <p>{event.date}</p>
                                </div>
                                <div className="CardEventInfo">
                                    <BiMap />
                                    <p>{event.place}</p>
                                </div>
                                <div className="CardEventInfo">
                                    <BiPurchaseTag />
                                    <p>{event.category}</p>
                                </div>
                            </div>
                            <div className="CardEventBtn">
                                <ExcluirEvento id={event.id} filtro={setCards} />
                                <Link to={`/editarEvento/${event.id}`}>
                                    <button>Editar evento</button>
                                </Link>
                            </div>
                        </div>
                        <div className="CardEventDescription">
                            <p><strong>Descrição:</strong></p>
                            <p>{event.description}</p>
                        </div>

                    </CardEventDiv>

                )
            })}
        </div>

    )
}