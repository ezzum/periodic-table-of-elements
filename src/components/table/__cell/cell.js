import React from 'react';
import {Link} from 'react-router-dom';

import './cell.scss'

function Cell({elements, redirectInfo}) {

    const cells = elements.map((item) => {

        const className = 'table__cell cell';
        const style = {
            gridArea: `${item.row}/${item.column}`
        }

        return (
            <Link to='/description'
                key={item.symbol} 
                className={className} 
                style={style}
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
            {cells}
        </div>
    );
};

export default Cell;