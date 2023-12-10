import { CardCriarCategoriaDiv } from './styles'
import { MdCategory } from "react-icons/md";
import { useForm } from "react-hook-form"
import { api } from '../../service/api';

export function CardCriarCategoria() {

    const { register, handleSubmit } = useForm()
    const addCategory = data => api.post("/category", data)
        .then(() => {
            console.log("deu tudo certo.")
        })
        .catch(() => {
            console.log("deu tudo errado.")
        })
    return (
        <CardCriarCategoriaDiv>
            <div className='Container'>
                <form onSubmit={handleSubmit(addCategory)}>
                    <h3>Categoria</h3>
                    <div className="categoria">
                        <MdCategory />
                        <p>Categoria: </p>
                    </div>
                    <input type="text" name="categoria" id="categoria" required {...register("name")} />
                    <button className="cadastroCategoriaBtn" type="submit">Cadastrar Categoria</button>
                </form>
            </div>
        </CardCriarCategoriaDiv>
    )
}
