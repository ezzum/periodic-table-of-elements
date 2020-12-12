import React from 'react';

import './column-numbers.scss';

const ColumnNumbers = () => {

    const arr = new Array(18).fill(0);
    const numbers = arr.map((item, idx) => {
        return (
            <div key={item + idx} className='table__column-number'>
                {idx+1}
            </div>
        )
    })

    return (
        <div className='table__column-numbers'>
            {numbers}
        </div>
    );
};

export default ColumnNumbers;