import { CardCriarCategoriaDiv } from './styles'
import { MdCategory } from "react-icons/md";
import { useForm } from "react-hook-form"
import { api } from '../../service/api';
import { CardCategory } from '../CardCategoria';
import { useState, useEffect } from 'react';

export function CardCriarCategoria() {
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit } = useForm()

    const ListCategories = async () => {
        try {
            const response = await api.get('/category');
            setCategories(response.data);
        } catch (error) {
            console.error('Erro ao obter lista de categorias:', error);
        }
    };

    useEffect(() => {
        ListCategories();
    }, []);

    const addCategory = async (data) => await api.post("/category", data)
        .then(() => {
            console.log("deu tudo certo.")
            ListCategories();
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
            <CardCategory categories={categories} />
        </CardCriarCategoriaDiv>
    )
}
