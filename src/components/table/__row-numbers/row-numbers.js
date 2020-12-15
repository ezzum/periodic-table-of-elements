import React from 'react';
import ArrayGen from '../../array-gen/array-gen';
import './row-numbers.scss';

const RowNumbers = ({numbers}) => {
    return (
        <div className='table__row-numbers'>
            {numbers}
        </div>
    );
}

export default ArrayGen(RowNumbers);