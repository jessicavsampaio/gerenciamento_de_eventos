import { BiSearch } from "react-icons/bi"
import { Search } from "./styles"
import { useState } from "react"

export function SearchBar({ onFilter }) {
    const [categoryName, setCategoryName] = useState('')
    const handleSearch = (e) => {
        const searchTerm = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        setCategoryName(searchTerm)
    }
    const searchClick = () => {
        onFilter(categoryName)
    }

    return (
        <Search>
            <input type="text" placeholder="Fazer uma pesquisa" value={categoryName} onChange={handleSearch} />
            <button onClick={searchClick}><BiSearch /></button>
        </Search>
    )
}