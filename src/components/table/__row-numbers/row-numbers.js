import React from 'react';

import './row-numbers.scss';

const RowNumbers = () => {

    const arr = new Array(7).fill(0);
    const numbers = arr.map((item, idx) => {
        return (
            <div key={item + idx} className='table__row-number'>
                {idx+1}
            </div>
        )
    });

    return (
        <div className='table__row-numbers'>
            {numbers}
        </div>
    );
}

export default RowNumbers;