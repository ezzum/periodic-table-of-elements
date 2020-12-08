import React from 'react';

import Cell from './__cell/cell';
import './table.scss';

const Table = ({data}) => {
    
    const rows = data.map((row) => {
        return (
            <Cell 
                cells = {row.cells}
            />
        );
    })

    return (
        <div className='table'>
            {rows}
        </div>
    );
}

export default Table;