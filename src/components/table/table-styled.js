import styled from 'styled-components';

const TableColor = '#E5E5DC';

const TableStyled = styled.div `
    margin-bottom: 15px;
    background-color: ${TableColor};
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto 74% auto;
    grid-template-areas: 
        'empty column-numbers'
        'row-numbers elements'
        'hide elements';
`;

export {TableStyled};