import React from 'react';
import {Link} from 'react-router-dom';

import {
    ElementsStyled, 
    CellStyled,
    Symbol,
    Number, 
    Name, 
    AtomicMass
} from './elements-grid-styled';
import Preview from '../__preview/preview';
import FilterButton from '../__filter-button/filter-button';

function ElementsGrid({elements, redirectInfo, preview, previewElement, filterElementsGroup}) {

    const cells = elements.map((item) => {
        return (
            <CellStyled as={Link} to='/description'
                item={item}
                key={item.symbol}
                onMouseEnter={()=>{preview(item)}}
                onClick={() => {redirectInfo(item.name)}} >
                    <Number>{item.number}</Number>
                    <Symbol>{item.symbol}</Symbol>
                    <Name>{item.name}</Name>
                    <AtomicMass>{item.atomicMass}</AtomicMass>
            </CellStyled>
        );
    })

    return (
        <ElementsStyled>
            <Preview previewElement={previewElement}/>
            <FilterButton
                filterElementsGroup={filterElementsGroup}
                gridArea={'1/8/2/12'}
                name={'Металлы'}
                group={'metal'}/>
            <FilterButton
                filterElementsGroup={filterElementsGroup}
                gridArea={'2/8/3/12'}
                name={'Полуметаллы'}
                group={'semi-metal'}/>
            <FilterButton
                filterElementsGroup={filterElementsGroup}
                gridArea={'3/8/4/12'}
                name={'Неметаллы'}
                group={'non-metal'}/>
            {cells}
        </ElementsStyled>
    );
};

export default ElementsGrid;