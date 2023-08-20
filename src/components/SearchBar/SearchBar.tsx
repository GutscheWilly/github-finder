import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';

import './SearchBar.css';

function SearchBar() {
    const [userSearch, setUserSearch] = useState<string>('');

    return (
        <form className="search-bar">
            <input
                type="search"
                placeholder="Buscar usuário"
                className="search-input"
                required
                value={userSearch}
                onChange={ event => setUserSearch(event.target.value) }
            />

            <button type="submit" className="search-button">
                <ImSearch />
            </button>
        </form>
    );
}

export default SearchBar;
