import React from 'react';
import ArrayOfNumber from '../../array-of-number/array-of-number';

import {RowNumbersStyled} from './row-numbers-styled';

function RowNumbers({numbers}) {
    return (
        <RowNumbersStyled>
            {numbers}
        </RowNumbersStyled>
    );
}

export default ArrayOfNumber(RowNumbers, 'row');