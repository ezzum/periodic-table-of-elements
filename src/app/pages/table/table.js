import React from 'react';
import {connect} from 'react-redux';

import ColumnNumbers from './__column-numbers/column-numbers';
import RowNumbers from './__row-numbers/row-numbers';
import ElementsGrid from './__elements/elements-grid';
import Spinner from '../../spinner/spinner';

import {TableStyled} from './table-styled';

function Table({tableProps, loading}) { 

    let fragment = (
        <>
           <ColumnNumbers numberCount = {tableProps.columns}/>
           <RowNumbers numberCount = {tableProps.rows}/>
           <ElementsGrid/>
        </>
    )

    if(loading) {
        fragment = <Spinner/>
    }

    return (
        <TableStyled>
            {fragment}
        </TableStyled>
    );
}

function mapStateToProps(state) {
    return {
        tableProps: state.tableProps,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Table);