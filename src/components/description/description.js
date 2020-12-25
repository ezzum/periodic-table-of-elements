import React from 'react';

import ExitButton from '../exit-button/exit-button';

function Description({activeElements}) {
    return (
        <div className='description'>
            <ExitButton/>
            <h1>Описание</h1>
            <p className='description__text'>
                {activeElements}
            </p>
        </div>
    )
}

export default Description;