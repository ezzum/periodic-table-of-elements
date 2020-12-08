import React from 'react';

import './cell.scss'

const Cell = ({cells}) => {
    
    const elements = cells.map((cell) => {

        let className = 'table__cell';

        if (typeof(cell.symbol) === 'number') className = 'table__column-number';
        if (cell.symbol === 'empty') className += ' hide';

        return (
            <div className={className}>
                {cell.symbol}
            </div>
        );
    })

    return (
        <div className='table__row'>
            {elements}
        </div>
    );
};

export default Cell;