import React from 'react';
import {Link} from 'react-router-dom';

function ExitButton() {
    return (
        <Link to='/' className='exit-button'>
            Exit
        </Link>
    )
}

export default ExitButton;