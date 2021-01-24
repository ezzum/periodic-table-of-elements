import React from "react";

import { FilterButtonClick } from "../../../redux/actions";
import { connect } from "react-redux";
import { Button } from "./filter-button-styled.js";

function FilterButton({ name, group, grid, isActive, FilterButtonClick }) {
  return (
    <Button
      isActive={isActive[group]}
      gridArea={grid}
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
