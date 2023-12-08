import { CardCriarLocaisDiv } from './styles'
import { MdPlace } from "react-icons/md";
import { useForm } from "react-hook-form"
import { api } from '../../service/api';

export function CardCriarLocais({ setId }) {



    const { register, handleSubmit } = useForm()
    const addEvent = data => api.post("http://localhost:3000/place", data)
        .then(response => {
            console.log("deu tudo certo.")
            setId(response.data.id);
        })
        .catch(() => {
            console.log("deu tudo errado.")
        })
    return (
        <CardCriarLocaisDiv>
            <div className='Container'>
                <form onSubmit={handleSubmit(addEvent)}>
                    <h3>Local</h3>
                    <div className="local">
                        <MdPlace />
                        <p>Local: </p>
                    </div>
                    <input type="text" name="local" id="local" required {...register("name")} />

                    <button className="cadastroLocalBtn" type="submit">Cadastrar Local</button>
                </form>
            </div>




        </CardCriarLocaisDiv>
    )
}
