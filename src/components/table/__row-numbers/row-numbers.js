import React from 'react';
import ArrayOfNumber from '../../array-of-number/array-of-number';
import './row-numbers.scss';

const RowNumbers = ({numbers}) => {
    return (
        <div className='table__row-numbers'>
            {numbers}
        </div>
    );
}

export default ArrayOfNumber(RowNumbers, 'row');