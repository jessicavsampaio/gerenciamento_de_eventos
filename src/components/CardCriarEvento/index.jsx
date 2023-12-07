import { CardCriarEventoDiv } from './styles'
import { BiCalendar, BiMap, BiPurchaseTag } from 'react-icons/bi';
import { BsFileText } from "react-icons/bs";
import { Link } from 'react-router-dom';

export function CardCriarEvento() {
    return (
        <CardCriarEventoDiv>
            <div>
                <form>
                    <h3>Evento</h3>
                    <div className="formLabel">
                        <label htmlFor="nomeDoEvento">Nome: </label>
                    </div>
                    <input id="nomeDoEvento" type="text" placeholder="Nome do evento" maxLength={100} required />

                    <div className="formLabel">
                        <BiCalendar />
                        <label htmlFor="date">Data: </label>
                    </div>
                    <input type="date" name="date" id="date" placeholder="Data" required />

                    <div className="formLabel">
                        <BiMap />
                        <label htmlFor="localDoEvento">Local: </label>
                    </div>
                    <Link to={`/local`}>
                        Criar novo local
                    </Link>
                    <select id="localDoEvento" name="locais" required>
                        <option>--Por favor escolha uma opção--</option>
                    </select>

                    <div className="formLabel">
                        <BiPurchaseTag />
                        <label htmlFor="categoriaDoEvento">Categoria: </label>
                    </div>
                    <Link to={`/categoria`}>
                        Criar nova categoria
                    </Link>
                    <select id="categoriaDoEvento" name="categorias" required>
                        <option>--Por favor escolha uma opção--</option>
                    </select>

                    <div className="formLabel">
                        <BsFileText />
                        <label htmlFor="descricaoDoEvento">Descrição: </label>
                    </div>
                    <textarea id="descricaoDoEvento" name="descricaoDoEvento" rows="5" placeholder="Descrição do evento" required />

                    <button className='cadastroEventoBtn' type="submit">Cadastrar evento</button>

                </form>

            </div>
        </CardCriarEventoDiv>
    )
}