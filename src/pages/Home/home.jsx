import { CardEvent } from "../../components/CardEvento";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { SearchBar } from "../../components/SearchBar";
import { useEffect, useState } from 'react';
import { api } from '../../service/api';

export function Home() {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredEvents, setFilteredEvents] = useState([])
    const [shouldUpdate, setShouldUpdate] = useState(false);

    useEffect(() => {
        if(searchTerm) {
            api.get(`/eventsByCategory/${searchTerm}`)
            .then((response) => {
                setFilteredEvents(response.data)
            })
            .catch(() => {
                console.log('Erro ao filtrar eventos')
            })
        } else {
            api.get('/event')
            .then((response) => {
                setFilteredEvents(response.data)
                setShouldUpdate(false);
            })
            .catch(() => {
                console.log('Erro ao obter eventos')
            })
        }
    }, [searchTerm, shouldUpdate])

    const filter = (filterTerm) => {
        setSearchTerm(filterTerm)
    }

    const deleteEvent = (eventId) => {
        api.delete(`/event/${eventId}`)
        .then(() => {
        setShouldUpdate(true)
        })
        .catch(() => {
            console.log('Erro ao excluir evento')
        })
    }

    const handleDeleteEvent = (eventId) => {
        deleteEvent(eventId)
    }

    return (
        <>
                <Header />
                <div>
                    <SearchBar onFilter={filter} />
                    <Container title="Eventos">

                    </Container>
                    <CardEvent events={filteredEvents} onDeleteEvent={handleDeleteEvent} />
                </div>
        </>

    )
}
