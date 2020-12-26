import React from 'react';

import ColumnNumbers from './__column-numbers/column-numbers';
import RowNumbers from './__row-numbers/row-numbers';
import ElementsGrid from './__elements/elements-grid';
import Spinner from '../spinner/spinner';

import {TableStyled} from './table-styled';

function Table({
    elements, 
    tableProps, 
    redirectInfo, 
    preview, 
    previewElement, 
    filterElementsGroup}) {

    let fragment = (
        <>
           <ColumnNumbers numberCount = {tableProps.columns}/>
           <RowNumbers numberCount = {tableProps.rows}/>
           <ElementsGrid 
                elements={elements}
                redirectInfo={redirectInfo}
                preview={preview}
                previewElement={previewElement}
                filterElementsGroup={filterElementsGroup}
           />
        </>
    )

    if(!elements.length) {
        fragment = <Spinner/>
    }

    return (
        <TableStyled>
            {fragment}
        </TableStyled>
    );
}

export default Table;