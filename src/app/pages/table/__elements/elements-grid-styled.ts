import styled from 'styled-components';

const cellFontsColor = '#fff';
const cellColor = '#829079';
const activeCellColor = '#b9925e';

interface CellProps {
  item: {
    active: boolean;
    row: number;
    column: number;
  };
}

const ElementsStyled = styled.div`
  grid-area: elements;
  display: grid;
  grid-template-rows: repeat(10, auto);
  grid-template-columns: repeat(18, auto);
  grid-gap: 0.3rem;
`;

const CellStyled = styled.div.attrs((props: CellProps) => ({
  style: {
    backgroundColor: props.item.active ? activeCellColor : cellColor,
  },
}))`
  color: ${cellFontsColor};
  width: 4.3rem;
  height: 4.5rem;
  border-radius: 0.3rem;
  background-color: ${cellColor};
  cursor: pointer;
  text-decoration: none;
  grid-area: ${(props: CellProps) => props.item.row} /
    ${(props) => props.item.column};
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  &:hover {
    transform: scale(1.1);
  }
`;

const Number = styled.div`
  font-size: 1rem;
  text-align: start;
  margin: 0 0.3rem;
`;

const Symbol = styled(Number)`
  font-size: 1rem;
  text-align: center;
`;

const Name = styled(Number)`
  font-size: 0.7rem;
  text-align: center;
  margin: 0 auto;
  &:first-letter {
    text-transform: uppercase;
  }
`;

const AtomicMass = styled(Number)`
  font-size: 0.8rem;
  text-align: end;
`;

export { ElementsStyled, CellStyled, Symbol, Number, Name, AtomicMass };
