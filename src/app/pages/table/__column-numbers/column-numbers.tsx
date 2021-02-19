import React from 'react';
import ArrayOfNumber from '../../../array-of-number/array-of-number';

import { ColumnNumbersStyled } from './column-numbers-styled';

interface Props {
  numbers: number;
}

function ColumnNumbers({ numbers }: Props) {
  return <ColumnNumbersStyled>{numbers}</ColumnNumbersStyled>;
}

export default ArrayOfNumber(ColumnNumbers, 'column');
