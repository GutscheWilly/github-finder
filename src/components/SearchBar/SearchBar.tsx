import React, { useContext, useState } from 'react';
import { ImSearch } from 'react-icons/im';

import './SearchBar.css';
import AppContext from '../../context/AppContext';
import fechUser from '../../api/fechUser';
import User from '../../interfaces/User';

function SearchBar() {
    const [userSearch, setUserSearch] = useState<string>('');

    const { setUser } = useContext(AppContext);

    function handleSearch(event: any): void {
        event.preventDefault();

        fechUser(userSearch).then( (userResponse: User | null) => {
            setUser(userResponse);
            setUserSearch('');

            if (userResponse === null) {
                alert('Usuário não encontrado!');
            }
        });
    }

    return (
        <form className="search-bar" onSubmit={handleSearch}>
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
