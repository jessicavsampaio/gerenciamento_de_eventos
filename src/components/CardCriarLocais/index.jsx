import { CardCriarLocaisDiv } from './styles'
import { MdPlace } from "react-icons/md";
import { useForm } from "react-hook-form"
import { api } from '../../service/api';
import { useState, useEffect } from 'react';
import { CardPlace } from '../CardLocal'


export function CardCriarLocais() {
    const [places, setPlaces] = useState([]);
    const { register, handleSubmit } = useForm()

    const ListPlaces = async () => {
        try {
            const response = await api.get('/listPlace');
            setPlaces(response.data);
        } catch (error) {
            console.error('Erro ao obter lista de locais:', error);
        }
    };

    useEffect(() => {
        ListPlaces();
    }, []);

    const addPlace = async (data) => await api.post("/place", data)
        .then(() => {
            console.log("deu tudo certo.")
            ListPlaces();
        })
        .catch(() => {
            console.log("deu tudo errado.")
        })

    const editPlace = async (placeId, newName) => {
        try {
            await api.put(`/place/${placeId}`, { name: newName });
            console.log("Local editado com sucesso.");
            ListPlaces();
        } catch (error) {
            console.log("Erro ao editar local.")
        }
    }

    return (
        <CardCriarLocaisDiv>
            <div className='Container'>
                <form onSubmit={handleSubmit(addPlace)}>
                    <h3>Local</h3>
                    <div className="local">
                        <MdPlace />
                        <p>Locais: </p>
                    </div>
                    <input type="text" name="local" id="local" required {...register("name")} />
                    <button className="cadastroLocalBtn" type="submit">Cadastrar Local</button>
                </form>
            </div>
            <CardPlace places={places} onEdit={editPlace} />
        </CardCriarLocaisDiv>
    )
}