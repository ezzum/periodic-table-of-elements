import React from 'react';

import './filter-button.scss';

function FilterButton({filterElementsGroup, name, group}) {
    return (
        <button 
            className={`table__filter-button-${group}`}
            onClick={()=>{filterElementsGroup(group)}}>
            {name}
        </button>
    )
}

export default FilterButton;