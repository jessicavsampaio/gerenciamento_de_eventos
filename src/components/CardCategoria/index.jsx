export function CardCategory({ categories }) {

    return (
        <div>
            <h3>Lista de Categorias</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}