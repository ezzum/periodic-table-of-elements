import React from 'react';

import ColumnNumbers from './__column-numbers/column-numbers';
import RowNumbers from './__row-numbers/row-numbers';
import Cell from './__cell/cell';
import './table.scss';

const Table = ({elements}) => {

    return (
        <div className='table'>
            <ColumnNumbers/>
            <RowNumbers/>
            <Cell
                elements={elements}
            />
        </div>
    );
}

export default Table;