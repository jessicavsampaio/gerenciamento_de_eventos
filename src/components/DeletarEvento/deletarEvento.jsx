import { api } from '../../service/api';

export function ExcluirEvento({ id, filtro }) {

    const deleteEvent = () => {
        api.delete(`/event/${id}`)
            .then(() => {
                filtro(cards => cards.filter(event => event.id !== id));
            })
            .catch(() => {
                console.log("Não foi possível excluir o evento.");
            })
    };
    return (
        <button onClick={deleteEvent}>
            Excluir evento
        </button>
    );
}
