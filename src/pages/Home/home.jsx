import { CardEvent } from "../../components/CardEvento";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { SearchBar } from "../../components/SearchBar";
import { useEffect, useState } from 'react';
import { api } from '../../service/api';

export function Home() {
    const [searchParams, setSearchParams] = useState({
        type: 'category',
        value: '',
      });
    
      const [filteredEvents, setFilteredEvents] = useState([]);
      const [shouldUpdate, setShouldUpdate] = useState(false);
    
      useEffect(() => {
        const fetchFilteredEvents = async () => {
          try {
            let url = '/event';
    
            if (searchParams.type === 'category' && searchParams.value) {
              url = `/eventsByCategory/${searchParams.value}`;
            } else if (searchParams.type === 'place' && searchParams.value) {
              // Adapte a lógica conforme necessário
              url = `/eventsByPlace/${searchParams.value}`;
            } else if (searchParams.type === 'date' && searchParams.value) {
              // Adapte a lógica conforme necessário
              url = `/eventsByDate/${searchParams.value}`;
            }
    
            const response = await api.get(url);
            setFilteredEvents(response.data);
          } catch (error) {
            console.error('Erro ao obter eventos:', error);
          }
        };
    
        fetchFilteredEvents();
      }, [searchParams, shouldUpdate]);
    
      const filter = (filterParams) => {
        setSearchParams(filterParams);
      };
    

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
