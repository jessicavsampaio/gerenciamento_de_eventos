import { CardCriarLocaisDiv } from './styles'
import { MdPlace } from "react-icons/md";
import { useForm } from "react-hook-form"
import { api } from '../../service/api';
import { useState, useEffect } from 'react';
import { CardPlace } from '../CardLocal'

export function CardCriarLocais() {
    const [place, setPlace] = useState([])
    const { register, handleSubmit } = useForm()

    const Listplaces = async () => {
        try {
            const response = await api.get('/listPlace');
            setPlace(response.data);
        } catch (error) {
            console.error('Erro ao obter lista de locais:', error);
        }
    };

    useEffect(() => {
        Listplaces();
    }, []);

    const addPLace = async (data) => await api.post("/place", data)
        .then(() => {
            console.log("deu tudo certo.")
            Listplaces();
        })
        .catch(() => {
            console.log("deu tudo errado.")
        })
    return (
        <CardCriarLocaisDiv>
            <div className='Container'>
                <form onSubmit={handleSubmit(addPLace)}>
                    <h3>Local</h3>
                    <div className="local">
                        <MdPlace />
                        <p>Local: </p>
                    </div>
                    <input type="text" name="local" id="local" required {...register("name")} />

                    <button className="cadastroLocalBtn" type="submit">Cadastrar Local</button>
                </form>
            </div>
            <CardPlace places={place} />
        </CardCriarLocaisDiv>
    )
}
