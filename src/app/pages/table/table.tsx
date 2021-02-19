import React from 'react';
import { connect } from 'react-redux';

import ColumnNumbers from './__column-numbers/column-numbers';
import RowNumbers from './__row-numbers/row-numbers';
import ElementsGrid from './__elements/elements-grid';
import Spinner from '../../spinner/spinner';

import { TableStyled } from './table-styled';

import { TableProps } from './interfaces';

function Table({ tableProps, loading }: TableProps) {
  let fragment: React.ReactFragment = (
    <>
      <ColumnNumbers numberCount={tableProps.columns} />
      <RowNumbers numberCount={tableProps.rows} />
      <ElementsGrid />
    </>
  );

  if (loading) {
    fragment = <Spinner />;
  }

  return <TableStyled>{fragment}</TableStyled>;
}

function mapStateToProps(state: TableProps): TableProps {
  return {
    tableProps: state.tableProps,
    loading: state.loading,
  };
}

export default connect(mapStateToProps)(Table);
