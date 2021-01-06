import React, {useContext} from 'react';

import {Context} from '../../app/context';
import {Button} from './filter-button-styled.js';

function FilterButton({name, group, gridArea, isActive}) {
    
    const {filterElementsGroup} = useContext(Context);
    
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