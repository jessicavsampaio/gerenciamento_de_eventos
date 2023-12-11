export function CardPlace({ places }) {

    return (
        <div>
            <h3>Lista de locais</h3>
            <ul>
                {places.map((place) => (
                    <li key={place.id}>
                        {place.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}