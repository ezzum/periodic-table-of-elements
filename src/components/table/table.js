import React from 'react';

import ColumnNumbers from './__column-numbers/column-numbers';
import RowNumbers from './__row-numbers/row-numbers';
import Cell from './__cell/cell';
import Spinner from '../spinner/spinner';
import './table.scss';

function Table({elements, tableProps, redirectInfo}) {

    let fragment = (
        <>
           <ColumnNumbers numberCount = {tableProps.columns}/>
           <RowNumbers numberCount = {tableProps.rows}/>
           <Cell 
                elements={elements}
                redirectInfo={redirectInfo}
           />
        </>
    )

    if(!elements.length) {
        fragment = <Spinner/>
    }

    return (
        <div className='table'>
            {fragment}
        </div>
    );
}

export default Table;