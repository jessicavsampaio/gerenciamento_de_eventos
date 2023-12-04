import { CardCriarCategoriaDiv } from './styles'
import { MdCategory } from "react-icons/md";


export function CardCriarCategoria() {
    return (
        <CardCriarCategoriaDiv>
            <div className='Container'>
                <div className='Section'>
                    <h3>Categoria</h3>
                    <div className="categoria">
                        <MdCategory />
                        <p>Categoria: </p>
                    </div>
                    <input type="text" name="categoria" id="categoria" required />
                    <button className="cadastroCategoriaBtn" type="submit">Cadastrar Categoria</button>
                </div>
            </div>
        </CardCriarCategoriaDiv>
    )
}