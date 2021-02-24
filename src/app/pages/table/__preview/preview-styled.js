import styled from 'styled-components';

const PreviewColor = '#829079';
const fontColor = '#fff';

export const PreviewStyled = styled.div`
  background-color: ${PreviewColor};
  grid-area: 1 / 3 / 4 / 8;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0.3rem;
  color: ${fontColor};
`;

export const ElementInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;
