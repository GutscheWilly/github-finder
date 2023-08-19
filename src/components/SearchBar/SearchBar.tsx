import React from 'react';
import { ImSearch } from 'react-icons/im';

import './SearchBar.css';

function SearchBar() {
    return (
        <form className="search-bar">
            <input
                type="search"
                placeholder="Buscar usuário"
                className="search-input"
                required
            />

            <button type="submit" className="search-button">
                <ImSearch />
            </button>
        </form>
    );
}

export default SearchBar;
