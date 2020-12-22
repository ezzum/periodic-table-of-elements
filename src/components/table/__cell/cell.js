import React from 'react';
import {Link} from 'react-router-dom';

import Preview from '../__preview/preview';
import FilterButton from '../__filter-button/filter-button';
import './cell.scss'

function Cell({elements, redirectInfo, preview, previewElement, filterElementsGroup}) {

    const cells = elements.map((item) => {

        let className = 'table__cell cell';
        const style = {
            gridArea: `${item.row}/${item.column}`
        }

        if (!item.display) {
            className += ' hide'
        }

        return (
            <Link to='/description'
                key={item.symbol} 
                className={className} 
                style={style}
                onMouseEnter={()=>{preview(item)}}
                onClick={() => {redirectInfo(item.name)}} >
                <div className='cell__number'>
                    {item.number}
                </div>
                <div className='cell__symbol'>
                    {item.symbol}
                </div>
                <div className='cell__name'>
                    {item.name}
                </div>
                <div className='cell__atomic-mass'>
                    {item.atomicMass                }
                </div>
            </Link>
        );
    })

    return (
        <div className='table__elements'>
            <Preview previewElement={previewElement}/>
            <FilterButton
                filterElementsGroup={filterElementsGroup}
                name={'Металлы'}
                group={'metal'}/>
            <FilterButton
                filterElementsGroup={filterElementsGroup}
                name={'Полуметаллы'}
                group={'semi-metal'}/>
            <FilterButton
                filterElementsGroup={filterElementsGroup}
                name={'Неметаллы'}
                group={'non-metal'}/>
            {cells}
        </div>
    );
};

export default Cell;