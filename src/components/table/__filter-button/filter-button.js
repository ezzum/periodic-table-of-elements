import React from 'react';

import {Button} from './filter-button-styled.js';

function FilterButton({filterElementsGroup, name, group, gridArea, isActive}) {
    return (
        <Button 
            isActive = {isActive}
            gridArea = {gridArea}
            onClick={()=>{filterElementsGroup(group)}}>
            {name}
        </Button>
    )
}

export default FilterButton;