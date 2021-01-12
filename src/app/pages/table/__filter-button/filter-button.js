import React from 'react';

import { FilterButtonClick } from '../../../redux/actions';
import { connect } from 'react-redux';
import { Button } from './filter-button-styled.js';

function FilterButton({ name, group, gridArea, isActive, FilterButtonClick }) {
  return (
    <Button
      isActive={isActive[group]}
      gridArea={gridArea}
      onClick={() => FilterButtonClick(group)}
    >
      {name}
    </Button>
  );
}

function mapStateToProps(state) {
  return {
    isActive: state.activeButton,
  };
}

const mapDispatchToProps = {
  FilterButtonClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
