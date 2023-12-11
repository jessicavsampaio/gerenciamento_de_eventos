import { useState } from "react";
import { CardLocalDiv } from './styles'

export function CardPlace({ places, onEdit }) {
    const [editingPlaceId, setEditingPlaceId] = useState(null)
    const [editedPlaceName, setEditedPlaceName] = useState('')

    const handleEditClick = (placeId, placeName) => {
        setEditingPlaceId(placeId)
        setEditedPlaceName(placeName)
    };

    const handleCancelEdit = () => {
        setEditingPlaceId(null)
        setEditedPlaceName('')
    };

    const handleSaveEdit = (placeId) => {
        onEdit(placeId, editedPlaceName)
        setEditingPlaceId(null)
        setEditedPlaceName('')
    }

    return (
      <CardLocalDiv>
        <div>
            <h3>Lista de locais</h3>
            <ul>
                {places.map((place) => (
                    <li key={place.id}>
                        {editingPlaceId === place.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedPlaceName}
                                    onChange={(e) => setEditedPlaceName(e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(place.id)}>
                                    Salvar
                                </button>
                                <button onClick={handleCancelEdit}>Cancelar</button>
                            </>
                        ) : (
                            <>
                                {place.name}
                                <button onClick={() => handleEditClick(place.id, place.name)}>Editar</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
      </CardLocalDiv>
      );
}
