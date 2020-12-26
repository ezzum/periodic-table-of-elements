import styled from 'styled-components';

const cellFontsColor = '#000';
const cellColor = '#C4A35A';

const ElementsStyled = styled.div `
    width: 1222px;
    height: 747px;
    grid-area: elements;
    display: grid;
    grid-template-rows: repeat(10, auto);
    grid-template-columns: repeat(18, auto);
    grid-gap: 2px;
`;

const CellStyled = styled.div.attrs(props => ({
    style: {
        opacity: props.item.display ? 1 : 0.2,
        pointerEvents: props.item.display ? 'auto' : 'none',
    },
})) `
    color: ${cellFontsColor};
    width: 60px;
    height: 75px;
    background-color: ${cellColor};
    margin: 3px;
    cursor: pointer;
    text-decoration: none;
    grid-area: ${props => props.item.row} / ${props => props.item.column};
    transition: .2s;
    &:hover {
        transform: scale(1.1);
    }
`;

const Symbol = styled.div `
    font-size: 14px;
    text-align: center;
`;

const Name = styled.div `
    font-size: 12px;
    text-align: end;
    margin-right: 5px;
`;

const AtomicMass = styled(Name)`
    font-size: 14px;
`;

const Number = styled(Name) `
    margin-top: 3px;
`;

export {ElementsStyled, CellStyled, Symbol, Number, Name, AtomicMass};