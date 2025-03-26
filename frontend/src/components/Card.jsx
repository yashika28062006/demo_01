import React from 'react';
import './card.css';

function Card({card}) {
    return(
        <div className='card'>
            <h2>{card.title}</h2>
            <p>{card.author}</p>
            <p>{card.genre}</p>
            <p>{card.publisheddate}</p>
        </div>
    );
}

export default Card;