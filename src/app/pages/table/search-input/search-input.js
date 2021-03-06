import React from 'react';

import Input from './search-input-styled';
import useInput from '../useInput/useInput';

function SearchInput({ grid }) {
  const input = useInput('');
  return (
    <Input
      type={'text'}
      gridArea={grid}
      {...input}
      placeholder={'Поиск элемента'}
    />
  );
}
export default React.memo(SearchInput);
