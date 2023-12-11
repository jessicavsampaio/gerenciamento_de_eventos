// Componente SearchBar
import { BiSearch } from "react-icons/bi";
import { Search } from "./styles";
import { useState } from "react";

export function SearchBar({ onFilter }) {
    const [searchType, setSearchType] = useState('category');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDate, setSearchDate] = useState('');

    const handleSearchTypeChange = (type) => {
        setSearchType(type);
    };

    const handleSearch = () => {
        let filterValue = searchTerm;

        if (searchType === 'date') {
            filterValue = searchDate;
        }

        onFilter({
            type: searchType,
            value: filterValue,
        });
    };

    return (
        <Search>
            <div className="searchBar">
                <input
                    type="text"
                    placeholder="Fazer uma pesquisa"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>
                    <BiSearch />
                </button>
            </div>

            <fieldset>
                <legend>Selecione o tipo da busca:</legend>
                <div>
                    <input
                        type="radio"
                        id="category"
                        name="searchType"
                        value="category"
                        checked={searchType === 'category'}
                        onChange={() => handleSearchTypeChange('category')}
                    />
                    <label htmlFor="category">Categoria</label>
                

                
                    <input
                        type="radio"
                        id="place"
                        name="searchType"
                        value="place"
                        checked={searchType === 'place'}
                        onChange={() => handleSearchTypeChange('place')}
                    />
                    <label htmlFor="place">Local</label>
                

                
                    <input
                        type="radio"
                        id="date"
                        name="searchType"
                        value="date"
                        checked={searchType === 'date'}
                        onChange={() => handleSearchTypeChange('date')}
                    />
                    <label htmlFor="date">Data</label>
                </div>

                {searchType === 'date' && (
                    <input
                        type="date"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                    />
                )}
            </fieldset>


        </Search>
    );
}
