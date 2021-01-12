import styled from 'styled-components';

const PreviewColor = '#C4A35A';

const PreviewStyled = styled.div`
  background-color: ${PreviewColor};
  grid-area: 1 / 3 / 4 / 7;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 3px;
`;

export { PreviewStyled };
