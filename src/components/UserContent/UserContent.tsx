import React, { useContext } from 'react';
import { GrLocation } from 'react-icons/gr';

import './UserContent.css';
import AppContext from '../../context/AppContext';
import User from '../../interfaces/User';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';

function UserContent() {
    const { 
        user, 
        isLoading 
    }: { user: User | undefined, isLoading: boolean } = useContext(AppContext);

    function isThereUser(): boolean {
        return user !== undefined;
    }

    function userContent() {
        return (
            <section className={ `user-content ${isThereUser() ? '' : 'hidden'}` }>
                <img src={user?.avatar_url} alt="Avatar" className="avatar" />

                <h2 className="name">{user?.name}</h2>

                <div className="location-content">
                    <div className="location-icon"><GrLocation /></div>
                    <div className="location-text">{user?.location}</div>
                </div>

                <div className="followers-info">
                    <Card text="Seguidores" value={user?.followers} />
                    <Card text="Seguindo" value={user?.following} />
                </div>

                <a href={user?.html_url} className="github-link" target="_blank" rel="noreferrer">Acessar GitHub</a>
            </section>
        );
    }

    return (
        <>
            { isLoading ? <Loading /> : userContent() }
        </>
    );
}

export default UserContent;
