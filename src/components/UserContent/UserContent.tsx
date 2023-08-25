import React, { useContext, useEffect } from 'react';
import { GrLocation } from 'react-icons/gr';

import './UserContent.css';
import AppContext from '../../context/AppContext';
import User from '../../interfaces/User';

function UserContent() {
    const { user }: { user: User | null } = useContext(AppContext);

    useEffect( () => {
        console.log(user);
    }, [user]);

    return (
        <section className="user-content">
            <img src={user?.avatar_url} alt="Avatar" className="avatar" />

            <h2 className="name">{user?.name}</h2>

            <div className="location-content">
                <div className="location-icon"><GrLocation /></div>
                <div className="location-text">{user?.location}</div>
            </div>
        </section>
    );
}

export default UserContent;
