import { CardEventDiv } from './styles'
import { BiCalendar, BiMap, BiPurchaseTag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function CardEvent({ events, onDeleteEvent }) {
    const [deleteClicked, setDeleteClicked] = useState(false);
    const handleDeleteEvent = (eventId) => {
        setDeleteClicked(true);
        if (onDeleteEvent) {
            onDeleteEvent(eventId);
        }
    }

    return (
        <div>
            {events.map((event) => {

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
                                <button onClick={() => handleDeleteEvent(event.id)}>Excluir evento</button>
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