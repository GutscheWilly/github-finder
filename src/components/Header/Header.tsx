import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { VscGithub } from 'react-icons/vsc';

import './Header.css';

function Header() {
    return (
        <section className="header container">
            <div className="git-hub__icon">
                <VscGithub />
            </div>

            <h1 className="search-message">
                Busque por um usuário
            </h1>

            <SearchBar />
        </section>
    );
}

export default Header;
