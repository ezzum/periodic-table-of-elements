import styled from 'styled-components';

const TableStyled = styled.div`
  margin: 0 1rem 1.5rem 1rem;
  background-color: inherit;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto 74% auto;
  grid-template-areas:
    'empty column-numbers'
    'row-numbers elements'
    'hide elements';
`;

export { TableStyled };
