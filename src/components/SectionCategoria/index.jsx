import { SectionCategoriaDiv } from './styles'
import { MdCategory } from "react-icons/md";


export function SectionCategoria() {
    return (
        <SectionCategoriaDiv>
            <div className='Container'>
                <div className='Section'>
                    <h3>Categoria</h3>
                    <div className="categoria">
                        <MdCategory />
                        <p>Categoria: </p>
                        <input type="text" name="categoria" id="categoria" required />
                    </div>
                    <div>
                        <button className="cadastroCategoriaBtn" type="submit">Cadastrar Categoria</button>
                    </div>
                </div>
            </div>
        </SectionCategoriaDiv>
    )
}