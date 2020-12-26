import styled from 'styled-components';

const Button = styled.button `
    height: 50px;
    grid-area: ${props => props.gridArea};
`;

export {Button};