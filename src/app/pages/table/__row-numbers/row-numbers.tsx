import React from 'react';
import ArrayOfNumber from '../../../array-of-number/array-of-number';

import { RowNumbersStyled } from './row-numbers-styled';

interface Props {
  numbers: number;
}

function RowNumbers({ numbers }: Props) {
  return <RowNumbersStyled>{numbers}</RowNumbersStyled>;
}

export default ArrayOfNumber(RowNumbers, 'row');
