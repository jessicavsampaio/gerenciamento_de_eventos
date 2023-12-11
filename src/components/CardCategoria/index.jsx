import { useState } from "react";
import { CardCategoriaDiv } from './styles'

export function CardCategory({ categories, onEdit, onDelete }) {
    const [editingCategoryId, setEditingCategoryId] = useState(null)
    const [editedCategoryName, setEditedCategoryName] = useState('')

    const handleEditClick = (categoryId, categoryName) => {
        setEditingCategoryId(categoryId)
        setEditedCategoryName(categoryName)
    };

    const handleCancelEdit = () => {
        setEditingCategoryId(null)
        setEditedCategoryName('')
    };

    const handleSaveEdit = (categoryId) => {
        onEdit(categoryId, editedCategoryName)
        setEditingCategoryId(null)
        setEditedCategoryName('')
    }

    const handleDeleteClick = (categoryId) => {
        onDelete(categoryId)
    }

    return (
        <CardCategoriaDiv>
        <div>
            <h3>Lista de Categorias</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        {editingCategoryId === category.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedCategoryName}
                                    onChange={(e) => setEditedCategoryName(e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(category.id)}>
                                    Salvar
                                </button>
                                <button onClick={handleCancelEdit}>Cancelar</button>
                            </>
                        ) : (
                            <>
                                {category.name}
                                <button onClick={() => handleEditClick(category.id, category.name)}>Editar</button>
                                <button onClick={() => handleDeleteClick(category.id)}>Excluir</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        </CardCategoriaDiv>
    );
}
