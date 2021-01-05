import React, {useContext} from 'react';

import {Context} from '../app/context';
import ColumnNumbers from './__column-numbers/column-numbers';
import RowNumbers from './__row-numbers/row-numbers';
import ElementsGrid from './__elements/elements-grid';
import Spinner from '../spinner/spinner';

import {TableStyled} from './table-styled';

function Table({ 
    tableProps, 
    redirectInfo, 
    preview, 
    previewElement, 
    filterElementsGroup,
    activeButton}) {

    const {elements} = useContext(Context);    

    let fragment = (
        <>
           <ColumnNumbers numberCount = {tableProps.columns}/>
           <RowNumbers numberCount = {tableProps.rows}/>
           <ElementsGrid
                redirectInfo={redirectInfo}
                preview={preview}
                previewElement={previewElement}
                filterElementsGroup={filterElementsGroup}
                activeButton={activeButton}
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