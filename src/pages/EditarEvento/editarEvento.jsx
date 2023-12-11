import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { BiCalendar, BiMap, BiPurchaseTag } from 'react-icons/bi';
import { BsFileText } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react";
import { api } from '../../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import { EditarEventoDiv } from "./styles";

export function EditarEvento() {
    const { id } = useParams()
    const [locais, setLocais] = useState([])
    const [categorias, setCategorias] = useState([])
    const [localSelecionado, setLocalSelecionado] = useState('')
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()

    const editEvent = data => api.put(`/event/${id}`, data)
        .then(() => {
            console.log("deu tudo certo.")
            navigate('/');
        })
        .catch(() => {
            console.log("deu tudo errado.")
        })


    useEffect(() => {
        api.get(`/event/${id}`)
            .then((response) => {
                reset(response.data)
                setLocalSelecionado(response.data.place)
                setCategoriaSelecionada(response.data.category)
            })

        api.get("/listPlace")
            .then((response) => {
                setLocais(response.data)
            })
            .catch(() => {
                console.log("deu errado")
            })

        api.get("/category")
            .then((response) => {
                setCategorias(response.data)
            })
            .catch(() => {
                console.log("deu errado")
            })
    }, [])

    return (

        <>
            <Header />
                <Section title="Editar evento" />
                <EditarEventoDiv>
                    <form onSubmit={handleSubmit(editEvent)}>
                        <h3>Editar evento</h3>
                        <div className="formLabel">
                            <label htmlFor="nomeDoEvento">Nome: </label>
                        </div>
                        <div className="CardEventInfo">
                            <input className="rPill" id="nomeDoEvento" type="text" placeholder="Nome do evento" maxLength={100} required {...register("name")} />
                        </div>
                        <div className="formLabel">
                            <BiCalendar />
                            <label className="formLabel2" htmlFor="date">Data: </label>
                        </div>

                        <input className="rPill" type="date" name="date" id="date" placeholder="Data" required {...register("date")} />

                        <div className="formLabel">
                            <BiMap />
                            <label className="formLabel2" htmlFor="localDoEvento">Local: </label>
                        </div>
                        <div className="verticalizar">
                        <Link to={`/local`}>
                            Criar novo local
                        </Link>
                        <select id="localDoEvento" name="locais" required {...register("place_id")} defaultChecked={localSelecionado}>
                            <option value="disabled">Selecione novamente o local. Anterior: --{localSelecionado}--</option>
                            {locais.map((local) => {
                                return (
                                    <option key={local.id} value={local.id}>{local.name}</option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="formLabel">
                            <BiPurchaseTag />
                            <label className="formLabel2" htmlFor="categoriaDoEvento">Categoria: </label>
                        </div>
                        <div className="verticalizar">
                        <Link to={`/categoria`}>
                            Criar nova categoria
                        </Link>
                        <select id="categoriaDoEvento" name="categorias" required {...register("category_id")}>
                            <option value="disabled">Selecione novamente a categoria. Anterior: --{categoriaSelecionada}--</option>
                            {categorias.map((categoria) => {
                                return (
                                    <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                                )
                            })}
                        </select>
                        </div>
                        <div className="formLabel">
                            <BsFileText />
                            <label htmlFor="descricaoDoEvento">Descrição: </label>
                        </div>
                        <div className="verticalizar">
                        <textarea className="rPill" id="descricaoDoEvento" name="descricaoDoEvento" rows="5" placeholder="Descrição do evento" required {...register("description")} />
                            <div className="rCentral">
                        <button className='cadastroEventoBtn' type="submit">Salvar</button>
                        </div>
                        </div>
                    </form>

                </EditarEventoDiv>
        </>

    )
}
