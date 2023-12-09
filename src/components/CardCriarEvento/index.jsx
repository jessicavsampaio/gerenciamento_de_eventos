import { CardCriarEventoDiv } from './styles'
import { BiCalendar, BiMap, BiPurchaseTag } from 'react-icons/bi';
import { BsFileText } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react";
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';

export function CardCriarEvento() {
    const navigate = useNavigate();
    const [locais, setLocais] = useState([])
    const [categorias, setCategorias] = useState([])
    const { register, handleSubmit } = useForm()
    const addEvent = data => api.post("/event", data)
        .then(() => {
            console.log("deu tudo certo.")
            navigate('/');
        })
        .catch(() => {
            console.log("deu tudo errado.")
        })

    useEffect(() => {
        api.get("/listPlace")

            .then((response) => {
                setLocais(response.data);
            })
            .catch(() => {
                console.log("deu errado");
            })

        api.get("/category")
            .then((response) => {
                setCategorias(response.data);
            })
            .catch(() => {
                console.log("deu errado");
            })

    }, [])

    return (
        <CardCriarEventoDiv>
            <div>
                <form onSubmit={handleSubmit(addEvent)}>
                    <h3>Evento</h3>
                    <div className="formLabel">
                        <label htmlFor="nomeDoEvento">Nome: </label>
                    </div>

                    <input id="nomeDoEvento" type="text" placeholder="Nome do evento" maxLength={100} required {...register("name")} />

                    <div className="formLabel">
                        <BiCalendar />
                        <label htmlFor="date">Data: </label>
                    </div>

                    <input type="date" name="date" id="date" placeholder="Data" required {...register("date")} />

                    <div className="formLabel">
                        <BiMap />
                        <label htmlFor="localDoEvento">Local: </label>
                    </div>

                    <Link to={`/local`}>
                        Criar novo local
                    </Link>
                    <select id="localDoEvento" name="locais" required {...register("place_id")}>
                        <option value="disabled">--Por favor escolha uma opção--</option>
                        {locais.map((local) => {
                            return (
                                <option key={local.id} value={local.id}>{local.name}</option>
                            )
                        })}
                    </select>

                    <div className="formLabel">
                        <BiPurchaseTag />
                        <label htmlFor="categoriaDoEvento">Categoria: </label>
                    </div>

                    <Link to={`/categoria`}>
                        Criar nova categoria
                    </Link>
                    <select id="categoriaDoEvento" name="categorias" required {...register("category_id")}>
                        <option value="disabled">--Por favor escolha uma opção--</option>
                        {categorias.map((categoria) => {
                            return (
                                <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                            )
                        })}
                    </select>

                    <div className="formLabel">
                        <BsFileText />
                        <label htmlFor="descricaoDoEvento">Descrição: </label>
                    </div>
                    <textarea id="descricaoDoEvento" name="descricaoDoEvento" rows="5" placeholder="Descrição do evento" required {...register("description")} />

                    <button className='cadastroEventoBtn' type="submit">Cadastrar evento</button>

                </form>

            </div>
        </CardCriarEventoDiv>
    )
}