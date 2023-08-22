import React from 'react';
import { GrLocation } from 'react-icons/gr';

import './UserContent.css';

function UserContent() {
    return (
        <section className="user-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&usqp=CAU" alt="Avatar" className="avatar" />

            <h2 className="name">Willy</h2>

            <div className="location-content">
                <div className="location-icon"><GrLocation /></div>
                <div className="location-text">São José</div>
            </div>
        </section>
    );
}

export default UserContent;
