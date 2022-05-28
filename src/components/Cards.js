import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Cards(data) {
    return (
        <div className='card-body'>
            <div className='card-image-container'>
                <img
                    className='card-image'
                    src={data.cardImage}
                    alt="horzion zero dawn complete edition sunset"
                />
            </div>
            <div className='card-content'>
                <div className='developer'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <a href={data.developerURL} className='developer-name'>
                        {data.developer}
                    </a>
                    <a className='game-link' href={data.url}>
                        View on {data.platform}
                    </a>
                </div>
                <h2 className='card-title'>
                    {data.title}
                </h2>
                <p className='release-date'>
                    {data.releaseDate}
                </p>
                <p className='short-description'>
                    {data.review}
                </p>
            </div>
        </div>
    )
}

export default Cards;