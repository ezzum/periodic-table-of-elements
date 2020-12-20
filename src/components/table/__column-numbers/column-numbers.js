import React from 'react';
import ArrayOfNumber from '../../array-of-number/array-of-number';
import './column-numbers.scss';

function ColumnNumbers({numbers}) {
    return ( 
        <div className='table__column-numbers'>
            {numbers}
        </div>
    );
};

export default ArrayOfNumber(ColumnNumbers, 'column');