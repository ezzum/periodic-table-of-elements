import styled from 'styled-components';

const appColor = '#ede6b9';
const appBorderColor = '#858580';

const AppStyled = styled.div`
  font-family: 'Roboto', sans-serif;
  width: fit-content;
  min-width: 87rem;
  min-height: 53rem;
  background-color: ${appColor};
  border: 0.1rem solid ${appBorderColor};
  border-radius: 0.5rem;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { AppStyled };
