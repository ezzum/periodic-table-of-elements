import React, {useContext} from 'react';

import {Context} from '../../app/context';
import {PreviewStyled} from './preview-styled';

function Preview() {
    
    const {previewElement} = useContext(Context);
    
    return (
        <PreviewStyled>
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
        </PreviewStyled>
    )
}

export default Preview;