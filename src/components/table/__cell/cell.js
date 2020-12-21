import React from 'react';

import './cell.scss'

function Cell({elements}) {

    const cells = elements.map((item) => {

        const className = 'table__cell cell';
        const style = {
            gridArea: `${item.row}/${item.column}`
        }

        return (
            <div key={item.symbol} className={className} style={style}>
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
            </div>
        );
    })

    return (
        <div className='table__elements'>
            {cells}
        </div>
    );
};

export default Cell;