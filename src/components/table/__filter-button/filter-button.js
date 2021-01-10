import React from 'react';

import {Button} from './filter-button-styled.js';

function FilterButton({name, group, gridArea, isActive}) {
    
    
    return (
        <Button 
            isActive = {isActive}
            gridArea = {gridArea}>
            {name}
        </Button>
    )
}

export default FilterButton;