import React from 'react';

import './Card.css';

function Card({ text, value }: { text: string, value: number | undefined }) {
    return (
        <div className="card">
            <h3 className="text">{text}</h3>
            <h5 className="number">{value}</h5>
        </div>
    );
}

export default Card;
