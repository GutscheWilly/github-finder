import React, { useContext, useState } from 'react';
import { ImSearch } from 'react-icons/im';

import './SearchBar.css';
import AppContext from '../../context/AppContext';
import fechUser from '../../api/fechUser';
import User from '../../interfaces/User';

function SearchBar() {
    const [userSearch, setUserSearch] = useState<string>('');

    const { 
        setUser,
        setIsLoading
    } = useContext(AppContext);

    function handleSearch(event: any): void {
        event.preventDefault();
        setIsLoading(true);

        fechUser(userSearch).then( (userResponse: User | undefined) => {
            setUser(userResponse);
            setUserSearch('');

            if (userResponse === undefined) {
                alert('Usuário não encontrado!');
            }

            setIsLoading(false);
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
