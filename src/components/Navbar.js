import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav>
            <a href='body'><FontAwesomeIcon className='fontawesome-icon' icon={faEarthEurope} /> my game journal</a>
        </nav>
    )
}

export default Navbar;