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

function ElementsGrid({elements, redirectInfo, preview, previewElement, filterElementsGroup, activeButton}) {

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
                gridArea={'1/8/2/13'}
                name={'Металлы'}
                group={'metal'}
                isActive={activeButton.metal}/>
            <FilterButton
                filterElementsGroup={filterElementsGroup}
                gridArea={'2/8/3/13'}
                name={'Полуметаллы'}
                group={'semiMetal'}
                isActive={activeButton.semiMetal}/>
            <FilterButton
                filterElementsGroup={filterElementsGroup}
                gridArea={'3/8/4/13'}
                name={'Неметаллы'}
                group={'nonMetal'}
                isActive={activeButton.nonMetal}/>
            {cells}
        </ElementsStyled>
    );
};

export default ElementsGrid;