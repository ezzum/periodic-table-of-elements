import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  ElementsStyled,
  CellStyled,
  Symbol,
  Number,
  Name,
  AtomicMass,
} from './elements-grid-styled';
import Preview from '../__preview/preview';
import FilterButton from '../__filter-button/filter-button';
import { ElementMouseEnter, ElementClick } from '../../../redux/actions';
import SearchInput from '../search-input/search-input';

import {
  IElementsGridProps,
  IElementsGridState,
  IMapDispatchToProps,
} from './iterfaces';

function ElementsGrid({
  elements,
  ElementMouseEnter,
  ElementClick,
}: IElementsGridProps) {
  const cells = elements.map((item) => {
    return (
      <CellStyled
        as={Link}
        to="/description"
        item={item}
        key={item.symbol}
        onMouseEnter={() => ElementMouseEnter(item)}
        onClick={() => ElementClick(item.name)}
      >
        <Number>{item.number}</Number>
        <Symbol>{item.symbol}</Symbol>
        <Name>{item.name}</Name>
        <AtomicMass>{item.atomicMass}</AtomicMass>
      </CellStyled>
    );
  });

  return (
    <ElementsStyled>
      <SearchInput grid={'1/13/2/18'} />
      <Preview />
      <FilterButton grid={'1/8/2/13'} name={'Металлы'} group={'metal'} />
      <FilterButton
        grid={'2/8/3/13'}
        name={'Полуметаллы'}
        group={'semiMetal'}
      />
      <FilterButton grid={'3/8/4/13'} name={'Неметаллы'} group={'nonMetal'} />
      {cells}
    </ElementsStyled>
  );
}

function mapStateToProps(state: IElementsGridState): IElementsGridState {
  return {
    elements: state.elements,
  };
}

const mapDispatchToProps: IMapDispatchToProps = {
  ElementMouseEnter,
  ElementClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementsGrid);
