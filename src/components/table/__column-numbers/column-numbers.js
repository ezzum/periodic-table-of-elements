import React from 'react';
import ArrayGen from '../../array-gen/array-gen';
import './column-numbers.scss';

const ColumnNumbers = ({numbers}) => {
    return ( 
        <div className='table__column-numbers'>
            {numbers}
        </div>
    );
};

export default ArrayGen(ColumnNumbers);