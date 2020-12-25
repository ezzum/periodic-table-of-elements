import React from 'react';

import './preview.scss';

function Preview({previewElement}) {
    return (
        <div className='table__preview'>
            <div>
                {previewElement.number}
            </div>
            <div>
                {previewElement.name}
            </div>
            <div>
                {previewElement.group}
            </div>
            <div>
                {previewElement.symbol}
            </div>
            <div>
                {previewElement.atomicMass}
            </div>
        </div>
    )
}

export default Preview;