import styled from 'styled-components';

const appColor = '#E5E5DC';
const appBorderColor = '#858580';

const AppStyled = styled.div`
  width: 1300px;
  height: 900px;
  background-color: ${appColor};
  border: 2px solid ${appBorderColor};
  border-radius: 5px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { AppStyled };
