import React from 'react';

import {Button} from './filter-button-styled.js';

function FilterButton({filterElementsGroup, name, group, gridArea}) {
    return (
        <Button 
            gridArea = {gridArea}
            onClick={()=>{filterElementsGroup(group)}}>
            {name}
        </Button>
    )
}

export default FilterButton;