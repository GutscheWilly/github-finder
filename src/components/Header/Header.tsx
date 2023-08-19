import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

function Header() {
    return (
        <section className="header container">
            <h1 className="search-message">
                Busque por um usuário
            </h1>

            <SearchBar />
        </section>
    );
}

export default Header;
